
export interface itemType {
  id?: number,
  name?: string
  price?: number
  popular?: boolean
}

export interface productType {
  id?: number,
  quantity?: number,
  items?: itemType[]
}


