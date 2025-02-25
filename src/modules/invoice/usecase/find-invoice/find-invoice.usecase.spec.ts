import Address from "../../../@shared/domain/value-object/address";
import Id from "../../../@shared/domain/value-object/id.value-object";
import Client from "../../../client-adm/domain/client.entity";
import FindInvoiceUseCase from "./find-invoice.usecase";

const client = new Client({
  id: new Id("1"),
  name: "Lucian",
  email: "lucian@123.com",
  document: "1234-5678",
  address: new Address(
    "Rua 123",
    "99",
    "Casa Verde",
    "Criciúma",
    "SC",
    "88888-888",
  )
})


const MockRepository = () => {
    return {
        generate: jest.fn(),
        find:jest.fn().mockReturnValue(Promise.resolve(client)),
    };
};

describe("Find invoice use case unit test", () => {

  it("should find an invoice", async () => {

    const repository = MockRepository()
    const usecase = new FindInvoiceUseCase(repository)

    const input = {
      id: "1"
    }

    const result = await usecase.execute(input)

    expect(repository.find).toHaveBeenCalled()
    expect(result.id).toEqual(input.id)
    expect(result.name).toEqual(client.name)
    expect(result.address).toEqual(client.address)
    expect(result.createdAt).toEqual(client.createdAt)
 
  })
})