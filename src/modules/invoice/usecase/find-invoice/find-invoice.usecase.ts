import InvoiceGateway from "../../gateway/invoice.gateway";
import { FindInvoiceUseCaseInputDTO, FindInvoiceUseCaseOutputDTO } from "./find-invoice.usecase.dto";

export default class FindInvoiceUseCase{
    private _invoiceRepository: InvoiceGateway;
    
    constructor(invoiceRepository: InvoiceGateway){
        this._invoiceRepository = invoiceRepository;
    }

    async execute (input: FindInvoiceUseCaseInputDTO): Promise<FindInvoiceUseCaseOutputDTO>{
        const client = await this._invoiceRepository.find(input.id);

        return{
            id: client.id.id,
            name: client.name,
            document: client.document,
            address: client.address,
            items: client.items,
            total: client.total,
            createdAt: client.createdAt,
            
        }
    }
}