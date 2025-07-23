export interface ILoginResponseEntity {
    token: string
    realm: string
    username: string
    name: string
    lastName: string
    email: string
    cellPhoneNumber: string
    deviceNme: string
    expirationDateInMinutes: number
    permissions: number[]
}