'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ILoginParamsEntity } from "@/lib/auth/login-params.entity";
import { login } from "@/lib/auth/login.action";
import { LoginSchema } from "@/lib/auth/login.schema";

export default function LoginPage() {

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(LoginSchema),
    });

    const onSubmit = async (data: ILoginParamsEntity) => {
        try {
            setLoading(true);
            const result = await login(data);

            if(!result) return toast.error("Error inesperado. No se pudo completar el login.");

            if (result.error && result.status === 401) {
                toast.error("Credenciales incorrectas. Por favor, verifica tu correo electrónico y contraseña.");
                return;
            }

            router.push("/parking-payment");
            

        } catch (err) {
            console.error("Error durante el login:", err);
            toast.error("Error inesperado durante el login.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Inicia sesión en tu cuenta</CardTitle>
                <CardDescription>
                    Ingresa tu correo electrónico a continuación para iniciar sesión en tu cuenta
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <CardContent>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Correo electrónico</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Contraseña</Label>
                                <Link
                                    href="#"
                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </div>
                            <Input id="password" type="password" required {...register("password", { required: true })} />
                            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full" disabled={loading}>
                        Iniciar sesión
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}