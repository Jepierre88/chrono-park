import { getServices } from "@/app/actions/parking-payment/services.action";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QrVisitorContent } from "./QrVisitorContent.component";

export default async function ServiceTypeCard() {

    const services = await getServices();

    return (
        <Card className="flex-1">
            <CardHeader>
                <h2 className="text-lg font-semibold">Tipo de Servicio</h2>
            </CardHeader>
            <CardContent>
            <Tabs defaultValue="qrVisitor">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="qrVisitor">Visitante(QR)</TabsTrigger>
                    <TabsTrigger value="qrMonthly">Mensualidad(QR)</TabsTrigger>
                </TabsList>
                <TabsContent value="qrVisitor">
                    <QrVisitorContent services={services} />
                </TabsContent>
                <TabsContent value="qrMonthly">Contenido para Mensualidad(QR)</TabsContent>
            </Tabs>
            </CardContent>
        </Card>
    );
}



