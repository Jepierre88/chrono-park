
export default interface IUrlSearchParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}