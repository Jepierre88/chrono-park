import z from "zod";

export const LoginSchema = z.object({
    email: z.email("Correo electrónico inválido").min(1, "Email es requerido"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});