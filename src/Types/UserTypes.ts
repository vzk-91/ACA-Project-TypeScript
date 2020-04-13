import Storage from '../services'

export type PhoneNumberType = {
    id : string
    phoneNumber : number
}

export type UserLoginType = {
    email : string
    password : string
}

export type UserRegisterType = {
    name: string
     email: string
     password: string
}

export type  UserUpdateType = {
    displayName : string
    id : string
    phoneNumber : string | null
}

const user = Storage.get('lp-user')

export  type UserType = typeof user