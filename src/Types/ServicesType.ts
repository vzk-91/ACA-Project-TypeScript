export type ServiceType =  {
    id?: string
    comments: Array<CommentsType> | []
    create : number
    description : string
    dislikes : Array<string> | []
    likes : Array<string> | []
    link : string | null
    owner : OwnerType
    serviceCategory : string
    title : string 
}

export type CommentsType = {
    comment : string
    create : number
    id : string
    name : string
    photoURL : string | null
}

export type OwnerType = {
    email : string
    id : string
    name : string
    phoneNumber : string | null
    photoURL : string | null
}

export type UpdateServiceDataType = {
    title: string
    description: string
    serviceCategory: string
}


