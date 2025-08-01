import axiosServerInstance from "@/lib/shared/axios-server.config";
import IIncome from "@/lib/types/entities/parking-payment/incomes/income.entity";
import IPaginationParams from "@/lib/types/interfaces/pagination-params.interface";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getIncomesAction(params: IPaginationParams): Promise<IIncome[]> {
  const response = await axiosServerInstance.get("/incomes/pp", {
    params: {
      page: params.page,
      limit: params.limit,
    },
  });
  return response.data

  // await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
  
  // return [
  //   {
  //     id: 1,
  //     datetime: new Date().toISOString(),
  //     identificationId: "ID-1",
  //     identificationMethod: "Method A",
  //     incomePointId: 1,
  //     peopleAmount: 1,
  //     plate: "ABC123",
  //     plateImage: "image1.jpg",
  //     processId: 1,
  //     state: 1,
  //     vehicle: "Car",
  //     vehicleKind: "Sedan"
  //   },
  //   {
  //     id: 2,
  //     datetime: new Date().toISOString(),
  //     identificationId: "ID-2",
  //     identificationMethod: "Method B",
  //     incomePointId: 2,
  //     peopleAmount: 2,
  //     plate: "DEF456",
  //     plateImage: "image2.jpg",
  //     processId: 2,
  //     state: 1,
  //     vehicle: "Car",
  //     vehicleKind: "Sedan"
  //   },
  // ]

}