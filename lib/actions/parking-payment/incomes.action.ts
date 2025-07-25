import axiosServerInstance from "@/lib/shared/axios-server.config";
import IPaginationParams from "@/lib/types/interfaces/pagination-params.interface";

export async function getIncomesAction(params: IPaginationParams) {
  // const response = await axiosServerInstance.get("/incomes/pp", {
  //   params: {
  //     page: params.page,
  //     limit: params.limit,
  //   },
  // });
  // return response.data

  return [
    {
      id: 1,
      header: "Income 1",
      type: "Type A",
      status: "Pending",
      target: "Target A",
      limit: "Limit A",
      reviewer: "Reviewer A"
    },
    {
      id: 2,
      header: "Income 2",
      type: "Type B",
      status: "Pending",
      target: "Target B",
      limit: "Limit B",
      reviewer: "Reviewer B"
    },
  ]

}