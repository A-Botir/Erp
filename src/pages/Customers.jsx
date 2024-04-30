import Cards from "../components/Cards";
import ClientsHead from "../components/ClientsHead";

const Customers = () => {
  return (
    <div>
      <ClientsHead />
      <div className="px-6 pt-6">
        <Cards />
        <div className="mt-6 rounded-md bg-white p-6">
          <table className="w-full rounded-md border border-[#E5E9EB] py-2 ">
            <thead>
              <tr className="border-b border-[#E5E9EB]">
                <th className="px-2 py-1 text-left font-semibold">Название</th>
                <th className="py-2 font-semibold">Номер телефона</th>
                <th className="py-2 font-semibold">Статус</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E5E9EB]">
                <td className="px-2 py-2 ">Cody Fisher</td>
                <td className="py-2 text-center">(907) 555-0101</td>
                <td>
                  <p className="mx-auto w-[200px] rounded-md bg-[#4094F726] py-1 text-center font-medium text-[#4094F7]">
                    Активный
                  </p>
                </td>
                <td className="flex justify-end">
                  <button className="px-2 py-3 shadow-tdbtn">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10C6.53043 10 7.03914 10.2107 7.41421 10.5858C7.78929 10.9609 8 11.4696 8 12ZM14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12ZM18 14C18.5304 14 19.0391 13.7893 19.4142 13.4142C19.7893 13.0391 20 12.5304 20 12C20 11.4696 19.7893 10.9609 19.4142 10.5858C19.0391 10.2107 18.5304 10 18 10C17.4696 10 16.9609 10.2107 16.5858 10.5858C16.2107 10.9609 16 11.4696 16 12C16 12.5304 16.2107 13.0391 16.5858 13.4142C16.9609 13.7893 17.4696 14 18 14Z"
                        fill="#4094F7"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;
