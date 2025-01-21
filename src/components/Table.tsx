import React from "react";
import Image from "next/image";
import dots from "@/Image/DotsThreeVertical.svg";
function Table() {
  return (
    <>
      <div className="overflow-x-auto min-h-screen">
        <table className="table-auto border-collapse border border-t-0 border-[#F1E5D1] w-full text-left">
          <colgroup>
            <col className="lg:w-[2%]" />
            <col className="lg:w-[8%]" />
            <col className="lg:w-[10%]" />
            <col className="lg:w-[13%]" />
            <col className="lg:w-[15%]" />
            <col className="lg:w-[11%]" />
            <col className="lg:w-[10%]" />
            <col className="lg:w-[10%]" />
            <col className="lg:w-[10%]" />
            <col className="lg:w-[8%]" />
          </colgroup>
          <thead className="bg-[#F9F4EC]">
            <tr>
              <th className="border-b border-gray-300 px-4 py-2 text-left">
                <input type="checkbox" className="cursor-pointer" />
              </th>
              <th className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm whitespace-nowrap">
                Sr. No
              </th>
              <th className="border-b border-[#F1E5D1] px-4 py-2 text-sm">
                Date
              </th>
              <th className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                Downline Name
              </th>
              <th className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                Parent Category
              </th>
              <th className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                Distributor ID
              </th>
              <th className="border-b border-[#F1E5D1] px-4 py-2 text-sm">
                Contact
              </th>
              <th className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm whitespace-nowrap">
                OS Balance
              </th>
              <th className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm">
                Status
              </th>
              <th className="border border-t border-[#F1E5D1] px-4 py-2 text-center text-sm">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- Row 1 -->   */}
            <tr className="hover:bg-gray-50 ">
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-left">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm">
                01
              </td>

              {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center">
                01
              </td> */}

              <td className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                01-07-2024
              </td>

              {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                01-07-2024
              </td> */}
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                Amar H. Shah
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                Distributor
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                MD25486569
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate first-line:text-sm">
                8866464917
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                200012.00
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                <button className="bg-pink-500 text-white px-4 py-1 rounded-sm text-sm">
                  Reversed
                </button>
              </td>
              <td className="border border-[#F1E5D1] px-4 py-2 text-center truncate">
                <button className="p-2">
                  <Image src={dots} width={0} height={0} alt="logo"></Image>
                </button>
              </td>
            </tr>
            {/* <!-- Row 2 --> */}
            <tr className="hover:bg-gray-50">
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-left">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm">
                02
              </td>

              {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center">
                01
              </td> */}

              <td className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                01-07-2024
              </td>

              {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                01-07-2024
              </td> */}
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                Amar H. Shah
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                Master Distributor
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                MD25486569
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                8866464917
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                200012.00
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                <button className="bg-pink-500 text-white px-4 py-1 rounded-sm text-sm">
                  Reversed
                </button>
              </td>
              <td className="border border-[#F1E5D1] px-4 py-2 text-center truncate">
                <button className="p-2">
                  <Image src={dots} width={0} height={0} alt="logo"></Image>
                </button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="hover:bg-gray-50">
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-left">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm">
                03
              </td>

              {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center">
                01
              </td> */}

              <td className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                01-07-2024
              </td>

              {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                01-07-2024
              </td> */}
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                Amar H. Shah
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                Master Distributor
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                MD25486569
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                8866464917
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                200012.00
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                <button className="bg-pink-500 text-white px-4 py-1 rounded-sm">
                  Reversed
                </button>
              </td>
              <td className="border border-[#F1E5D1] px-4 py-2 text-center truncate">
                <button className="p-2">
                  <Image src={dots} width={0} height={0} alt="logo"></Image>
                </button>
              </td>
            </tr>

            {/* row 4 */}
            <tr className="hover:bg-gray-50">
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-left">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm">
                04
              </td>

              {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center">
                01
              </td> */}

              <td className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                01-07-2024
              </td>

              {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                01-07-2024
              </td> */}
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                Amar H. Shah
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                Exclusive Distributor
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                MD25486569
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                8866464917
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                200012.00
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate ">
                <button className="bg-pink-500 text-white px-4 py-1 rounded-sm text-sm">
                  Reversed
                </button>
              </td>
              <td className="border border-[#F1E5D1] px-4 py-2 text-center truncate">
                <button className="p-2">
                  <Image src={dots} width={0} height={0} alt="logo"></Image>
                </button>
              </td>
            </tr>

            {/* row 5 */}
            <tr className="hover:bg-gray-50">
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-left">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm">
                05
              </td>

              {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center">
                01
              </td> */}

              <td className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                01-07-2024
              </td>

              {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                01-07-2024
              </td> */}
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                Amar H. Shah
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                Direct Distributor
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                MD25486569
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                8866464917
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                200012.00
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                <button className="bg-pink-500 text-white px-4 py-1 rounded-sm text-sm">
                  Reversed
                </button>
              </td>
              <td className="border border-[#F1E5D1] px-4 py-2 text-center truncate">
                <button className="p-2">
                  <Image src={dots} width={0} height={0} alt="logo"></Image>
                </button>
              </td>
            </tr>
            {/* row 6 */}
            <tr className="hover:bg-gray-50">
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-left">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm">
                06
              </td>

              {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center">
                01
              </td> */}

              <td className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                01-07-2024
              </td>

              {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                01-07-2024
              </td> */}
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                Amar H. Shah
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                Indirect Distributor
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                MD25486569
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                8866464917
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                200012.00
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                <button className="bg-pink-500 text-white px-4 py-1 rounded-sm text-sm">
                  Reversed
                </button>
              </td>
              <td className="border border-[#F1E5D1] px-4 py-2 text-center truncate">
                <button className="p-2">
                  <Image src={dots} width={0} height={0} alt="logo"></Image>
                </button>
              </td>
            </tr>
            {/* ROW 7 */}
            <tr className="hover:bg-gray-50">
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-left">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm">
                07
              </td>

              {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center">
                01
              </td> */}

              <td className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                01-07-2024
              </td>

              {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                01-07-2024
              </td> */}
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                Amar H. Shah
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                Sales Distributor
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                MD25486569
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                8866464917
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                200012.00
              </td>
              <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                <button className="bg-pink-500 text-white px-4 py-1 rounded-sm text-sm">
                  Reversed
                </button>
              </td>
              <td className="border border-[#F1E5D1] px-4 py-2 text-center truncate">
                <button className="p-2">
                  <Image src={dots} width={0} height={0} alt="logo"></Image>
                  {/* <img src="dots.svg" alt="dots" className="w-5 h-5" /> */}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <div classNameName=" overflow-x-auto overflow-y-auto md:max-w-full max-h-[500px] max-w-[350px]"> */}

      {/* <table>
          <colgroup>
            <col className="w-[2%]" />
            <col className="w-[5%]" />
            <col className="w-[5%]" />
            <col className="w-[10%]" />
            <col className="w-[10%]" />
            <col className="w-[10%]" />
            <col className="w-[10%]" />
            <col className="w-[10%]" />
            <col className="w-[10%]" />
            <col className="w-[10%]" />
          </colgroup>
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="cursor-pointer" />
              </th>
              <th>Sr.No</th>
              <th>Date</th>
              <th>Downline Name</th>
              <th>Parent Category</th>
              <th>Distributor ID</th>
              <th>Contact</th>
              <th>OS Balance </th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
        </table> */}
      {/* <table className=" lg:mx-auto xl:table-fixed table-auto w-full text-left border border-t-0 border-[#F1E5D1] text-sm">
          <thead className="bg-[#F9F4EC] text-gray-600 border border-t-0 border-[#F1E5D1] ">
            <tr className="flex items-center xl:table-row">
              <th className="lg:px-6 px-6 md:px-2 py-2 text-center ">
                <input type="checkbox" className="cursor-pointer" />
              </th>
              <th className=" pl-0 lg:px-2 py-2 text-center text-[#333333] text-sm md:w-[60px] lg:w-[80px] w-[100px]">
                Sr. No
              </th>
              <th className="md:px-5 lg:pl-2 py-2 text-left text-[#333333] md:w-[120px]">
                Date
              </th>
              <th className="px-4 py-2 text-left text-[#333333] md:w-[140px] lg:w-[200px] w-[150px]">
                Downline Name
              </th>
              <th className="px-2 py-2 text-left text-[#333333] md:w-[130px] w-[130px] ">
                Parent Category
              </th>
              <th className="px-2 lg:px-6 py-2 text-left text-[#333333] md:w-[120px] lg:w-[150px] w-[150px]">
                Distributor ID
              </th>
              <th className="px-2 py-2 text-left text-[#333333] md:w-[100px] lg:w-[200px]">
                Contact
              </th>
              <th className="px-2 py-2 text-center text-[#333333] md:w-[95px] lg:w-[107px] w-[100px]">
                OS Balance
              </th>
              <th className="px-2 py-2 text-center text-[#333333] md:w-[110px] lg:w-[140px]">
                Status
              </th>
              <th className="border text-center border-b-0 border-t-0 border-[#F1E5D1] px-4 py-2 text-[#333333]">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-[#333333] xl:table-fixed"> */}
      {/* 1 */}
      {/* <tr className="flex items-center border-t border-[#F1E5D1] xl:table-row">
              <td className="lg:px-6 px-6 md:px-2 py-2 text-center ">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className=" pl-0 lg:px-2 py-2 text-center text-[#333333] text-sm md:w-[60px] lg:w-[80px] w-[100px]">
                01
              </td>
              <td className="md:px-5 lg:pl-2 py-2 text-left text-[#333333] md:w-[120px]">
                01-07-2024
              </td>
              <td className="px-4 py-2 text-left text-[#333333] md:w-[140px] lg:w-[200px] w-[150px]">
                Amar H. Shah
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[130px] w-[130px] ">
                Distributor
              </td>
              <td className="px-2 lg:px-6 py-2 text-left text-[#333333] md:w-[120px] lg:w-[150px] w-[150px]">
                MD25486569
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[100px] lg:w-[200px]">
                8866464917
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[95px] lg:w-[107px] w-[100px]">
                200012.00
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[110px] lg:w-[140px]">
                <button className="bg-pink-500 text-white px-[20px] py-[6px] text-sm rounded">
                  Reversed
                </button>
              </td>
              <td className="border text-center border-b-0 border-t-0 border-[#F1E5D1] px-4 py-2 text-[#333333]">
                <div className="cursor-pointer md:p-[10px]">
                  <Image src={dots} alt="dots"></Image>
                </div>
              </td>
            </tr> */}
      {/* <!-- 2 --> */}
      {/* <tr className="flex items-center border-t border-[#F1E5D1] xl:table-row">
              <td className="lg:px-6 px-6 md:px-2 py-2 text-center ">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className=" pl-0 lg:px-2 py-2 text-center text-[#333333] text-sm md:w-[60px] lg:w-[80px] w-[100px]">
                01
              </td>
              <td className="md:px-5 lg:pl-2 py-2 text-left text-[#333333] md:w-[120px]">
                01-07-2024
              </td>
              <td className="px-4 py-2 text-left text-[#333333] md:w-[140px] lg:w-[200px] w-[150px]">
                Amar H. Shah
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[130px] w-[130px] ">
                Distributor
              </td>
              <td className="px-2 lg:px-6 py-2 text-left text-[#333333] md:w-[120px] lg:w-[150px] w-[150px]">
                MD25486569
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[100px] lg:w-[200px]">
                8866464917
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[95px] lg:w-[107px] w-[100px]">
                200012.00
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[110px] lg:w-[140px]">
                <button className="bg-pink-500 text-white px-[20px] py-[6px] text-sm rounded">
                  Reversed
                </button>
              </td>
              <td className="border text-center border-b-0 border-t-0 border-[#F1E5D1] px-4 py-2 text-[#333333]">
                <div className="cursor-pointer md:p-[10px]">
                  <Image src={dots} alt="dots"></Image>
                </div>
              </td>
            </tr> */}
      {/* <tr className="hover:bg-gray-50 border-t border-[#F1E5D1] md:flex md:items-center">
              <td className=" pl-2 py-2 text-center">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className=" px-4 py-2 text-center">02</td>
              <td className=" md:px-5 lg:pl-2 py-2 text-left">01-07-2024</td>
              <td className=" pl-4 py-2 text-left">Amar H. Shah</td>
              <td className=" pl-2 py-2 text-left">Master Distributor</td>
              <td className=" px-6 py-2 text-left">MD25486569</td>
              <td className=" px-2 py-2 text-left">8866464917</td>
              <td className=" pl-2 py-2 text-center">200012.00</td>
              <td className=" px-4 py-2 text-center">
                <span className="bg-pink-500 text-white px-[30px] py-[6px] m-[10px] text-sm rounded">
                  Reversed
                </span>
              </td>
              <td className="border border-[#F1E5D1] border-b-0 border-t-0 px-4 py-2 text-center flex justify-center items-center">
                <div className="cursor-pointer">
                  <Image src={dots} alt="dots"></Image>
                </div>
              </td>
            </tr> */}

      {/* 3 */}

      {/* <tr className="flex items-center border-t border-[#F1E5D1] xl:table-row">
              <td className="lg:px-6 px-6 md:px-2 py-2 text-center ">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className=" pl-0 lg:px-2 py-2 text-center text-[#333333] text-sm md:w-[60px] lg:w-[80px] w-[100px]">
                01
              </td>
              <td className="md:px-5 lg:pl-2 py-2 text-left text-[#333333] md:w-[120px]">
                01-07-2024
              </td>
              <td className="px-4 py-2 text-left text-[#333333] md:w-[140px] lg:w-[200px] w-[150px]">
                Amar H. Shah
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[130px] w-[130px] ">
                Distributor
              </td>
              <td className="px-2 lg:px-6 py-2 text-left text-[#333333] md:w-[120px] lg:w-[150px] w-[150px]">
                MD25486569
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[100px] lg:w-[200px]">
                8866464917
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[95px] lg:w-[107px] w-[100px]">
                200012.00
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[110px] lg:w-[140px]">
                <button className="bg-pink-500 text-white px-[20px] py-[6px] text-sm rounded">
                  Reversed
                </button>
              </td>
              <td className="border text-center border-b-0 border-t-0 border-[#F1E5D1] px-4 py-2 text-[#333333]">
                <div className="cursor-pointer md:p-[10px]">
                  <Image src={dots} alt="dots"></Image>
                </div>
              </td>
            </tr> */}

      {/* 4 */}
      {/* <tr className="flex items-center border-t border-[#F1E5D1] xl:table-row">
              <td className="lg:px-6 px-6 md:px-2 py-2 text-center ">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className=" pl-0 lg:px-2 py-2 text-center text-[#333333] text-sm md:w-[60px] lg:w-[80px] w-[100px]">
                01
              </td>
              <td className="md:px-5 lg:pl-2 py-2 text-left text-[#333333] md:w-[120px]">
                01-07-2024
              </td>
              <td className="px-4 py-2 text-left text-[#333333] md:w-[140px] lg:w-[200px] w-[150px]">
                Amar H. Shah
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[130px] w-[130px] ">
                Distributor
              </td>
              <td className="px-2 lg:px-6 py-2 text-left text-[#333333] md:w-[120px] lg:w-[150px] w-[150px]">
                MD25486569
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[100px] lg:w-[200px]">
                8866464917
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[95px] lg:w-[107px] w-[100px]">
                200012.00
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[110px] lg:w-[140px]">
                <button className="bg-pink-500 text-white px-[20px] py-[6px] text-sm rounded">
                  Reversed
                </button>
              </td>
              <td className="border text-center border-b-0 border-t-0 border-[#F1E5D1] px-4 py-2 text-[#333333]">
                <div className="cursor-pointer md:p-[10px]">
                  <Image src={dots} alt="dots"></Image>
                </div>
              </td>
            </tr> */}

      {/* 5 */}
      {/* <tr className="flex items-center border-t border-[#F1E5D1] xl:table-row">
              <td className="lg:px-6 px-6 md:px-2 py-2 text-center ">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className=" pl-0 lg:px-2 py-2 text-center text-[#333333] text-sm md:w-[60px] lg:w-[80px] w-[100px]">
                01
              </td>
              <td className="md:px-5 lg:pl-2 py-2 text-left text-[#333333] md:w-[120px]">
                01-07-2024
              </td>
              <td className="px-4 py-2 text-left text-[#333333] md:w-[140px] lg:w-[200px] w-[150px]">
                Amar H. Shah
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[130px] w-[130px] ">
                Distributor
              </td>
              <td className="px-2 lg:px-6 py-2 text-left text-[#333333] md:w-[120px] lg:w-[150px] w-[150px]">
                MD25486569
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[100px] lg:w-[200px]">
                8866464917
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[95px] lg:w-[107px] w-[100px]">
                200012.00
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[110px] lg:w-[140px]">
                <button className="bg-pink-500 text-white px-[20px] py-[6px] text-sm rounded">
                  Reversed
                </button>
              </td>
              <td className="border text-center border-b-0 border-t-0 border-[#F1E5D1] px-4 py-2 text-[#333333]">
                <div className="cursor-pointer md:p-[10px]">
                  <Image src={dots} alt="dots"></Image>
                </div>
              </td>
            </tr> */}

      {/* 6 */}
      {/* <tr className="flex items-center border-t border-[#F1E5D1] xl:table-row">
              <td className="lg:px-6 px-6 md:px-2 py-2 text-center ">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className=" pl-0 lg:px-2 py-2 text-center text-[#333333] text-sm md:w-[60px] lg:w-[80px] w-[100px]">
                01
              </td>
              <td className="md:px-5 lg:pl-2 py-2 text-left text-[#333333] md:w-[120px]">
                01-07-2024
              </td>
              <td className="px-4 py-2 text-left text-[#333333] md:w-[140px] lg:w-[200px] w-[150px]">
                Amar H. Shah
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[130px] w-[130px] ">
                Distributor
              </td>
              <td className="px-2 lg:px-6 py-2 text-left text-[#333333] md:w-[120px] lg:w-[150px] w-[150px]">
                MD25486569
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[100px] lg:w-[200px]">
                8866464917
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[95px] lg:w-[107px] w-[100px]">
                200012.00
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[110px] lg:w-[140px]">
                <button className="bg-pink-500 text-white px-[20px] py-[6px] text-sm rounded">
                  Reversed
                </button>
              </td>
              <td className="border text-center border-b-0 border-t-0 border-[#F1E5D1] px-4 py-2 text-[#333333]">
                <div className="cursor-pointer md:p-[10px]">
                  <Image src={dots} alt="dots"></Image>
                </div>
              </td>
            </tr> */}

      {/* 7 */}
      {/* <tr className="flex items-center border-t border-[#F1E5D1] xl:table-row">
              <td className="lg:px-6 px-6 md:px-2 py-2 text-center ">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className=" pl-0 lg:px-2 py-2 text-center text-[#333333] text-sm md:w-[60px] lg:w-[80px] w-[100px]">
                01
              </td>
              <td className="md:px-5 lg:pl-2 py-2 text-left text-[#333333] md:w-[120px]">
                01-07-2024
              </td>
              <td className="px-4 py-2 text-left text-[#333333] md:w-[140px] lg:w-[200px] w-[150px]">
                Amar H. Shah
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[130px] w-[130px] ">
                Distributor
              </td>
              <td className="px-2 lg:px-6 py-2 text-left text-[#333333] md:w-[120px] lg:w-[150px] w-[150px]">
                MD25486569
              </td>
              <td className="px-2 py-2 text-left text-[#333333] md:w-[100px] lg:w-[200px]">
                8866464917
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[95px] lg:w-[107px] w-[100px]">
                200012.00
              </td>
              <td className="px-2 py-2 text-center text-[#333333] md:w-[110px] lg:w-[140px]">
                <button className="bg-pink-500 text-white px-[20px] py-[6px] text-sm rounded">
                  Reversed
                </button>
              </td>
              <td className="border text-center border-b-0 border-t-0 border-[#F1E5D1] px-4 py-2 text-[#333333]">
                <div className="cursor-pointer md:p-[10px]">
                  <Image src={dots} alt="dots"></Image>
                </div>
              </td>
            </tr>
          </tbody>
        </table> */}
      {/* </div> */}
    </>
  );
}

export default Table;
