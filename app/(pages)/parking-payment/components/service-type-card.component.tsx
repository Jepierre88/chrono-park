import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getServices } from "@/lib/actions/parking-payment/services.action";
import EServiceTypes from "@/lib/types/enums/service-types.enum";
import { QrVisitorContent } from "./tabs-content/qr-visitor-content.component";

export default async function ServiceTypeCard() {
        const services = await getServices()

    return (
        <Card className="flex-1">
            <CardContent>
            <Tabs defaultValue="qrVisitor">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="qrVisitor">Visitante(QR)</TabsTrigger>
                    <TabsTrigger value="qrMonthly">Mensualidad(QR)</TabsTrigger>
                </TabsList>
                <TabsContent value="qrVisitor">
                    <QrVisitorContent services={services[EServiceTypes.VISITANTE]} />
                </TabsContent>
                <TabsContent value="qrMonthly">Contenido para Mensualidad(QR)</TabsContent>
            </Tabs>
            </CardContent>
        </Card>
    );
}



