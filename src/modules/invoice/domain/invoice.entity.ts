import AggregateRoot from "../../@shared/domain/entity/aggregate-root.interface"
import BaseEntity from "../../@shared/domain/entity/base.entity"
import Address from "../../@shared/domain/value-object/address"
import Id from "../../@shared/domain/value-object/id.value-object"

type invoiceProps = {
    id?: Id // criada automaticamente
    name: string
    document: string
    total: number
    address: Address // value object
    items: [] // Invoice Items entity
    createdAt?: Date // criada automaticamente
    updatedAt?: Date // criada automaticamente
}

export default class Invoice extends BaseEntity implements AggregateRoot {
  
    private _name: string
    private _document: string
    private _address: Address
    private _total : number
    private _items: [] 
    

  
  constructor(props: invoiceProps){
    super(props.id, props.createdAt, props.updatedAt)
    this._name = props.name
    this._document = props.document
    this._address = props.address
    this._total = props.total
    this._items = props.items
    }

  get name(): string {
    return this._name
  }

  get document(): string {
    return this._document
  }

  get address(): Address {
    return this._address
  }

  get total(): number {
    return this._total
  }

  get items(): []{
    return this._items
  }
}