import { FC, useEffect, useState } from "react";
import { LineItem, User } from "../../types";
import { GST_RATE, SERVICE_RATE } from "../../constants";
import Checkbox from "../Forms/Checkbox";
import UserSummary from "../UserSummary/UserSummary";
import TextInput from "../Forms/TextInput";
const cloneDeep = require("lodash.clonedeep");

type Props = {
  lineItems: LineItem[];
  users: User[];
  decrementStep: () => void;
  confirmSplit: (
    users: User[],
    phoneNumber: string,
    acceptedMethods: string[]
  ) => void;
};

const Summary: FC<Props> = ({
  lineItems,
  users,
  decrementStep,
  confirmSplit,
}) => {
  const [applyGst, setApplyGst] = useState(false);
  const [applyService, setApplyService] = useState(false);
  const [summaryUserData, setSummaryUserData] = useState<User[]>(
    cloneDeep(users)
  );
  const [payeeNumber, SetPayeeNumber] = useState("");
  const [paynow, setPaynow] = useState(false);
  const [paylah, setPaylah] = useState(false);
  const [googlepay, setGooglepay] = useState(false);

  const unsharedItems = lineItems.reduce(
    (acc, item) => acc || item.sharers === 0,
    false
  );

  useEffect(() => {
    let rate = 1;
    if (applyGst) rate *= 1 + GST_RATE / 100;
    if (applyService) rate *= 1 + SERVICE_RATE / 100;
    const usersCopy: User[] = cloneDeep(users);
    const usersWithRate = usersCopy.map((user) => {
      user.items = user.items.map((item) => {
        item.lineTotal = item.lineTotal * rate;
        return item;
      });
      return user;
    });
    setSummaryUserData(usersWithRate);
  }, [applyGst, applyService, users]);

  return (
    <>
      <div className="w-full text-center p-2 text-xl text-white">Summary Page</div>
      {unsharedItems && (
        <div className="bg-red-200">
          Note: You still have items that you have not split between users
        </div>
      )}
      <div className="flex flex-col gap-2">
        {summaryUserData.map((user) => {
          return <UserSummary key={user.id} user={user} />;
        })}
      </div>
      <div className="flex flex-col items-start">
        <Checkbox
          label={`Apply GST (${GST_RATE}%)`}
          checked={applyGst}
          setChecked={setApplyGst}
        />
        <Checkbox
          label={`Apply Service Charge (${SERVICE_RATE}%)`}
          checked={applyService}
          setChecked={setApplyService}
        />
      </div>

      <div className="text-xl text-white mt-8">Payee Details</div>
      <TextInput value={payeeNumber} update={SetPayeeNumber} />
      <div className="flex flex-col items-start">
        <Checkbox
          label={`Accept PayLah!`}
          checked={paylah}
          setChecked={setPaylah}
        />
        <Checkbox
          label={`Accept PayNow`}
          checked={paynow}
          setChecked={setPaynow}
        />
        <Checkbox
          label={`Accept Google Pay`}
          checked={googlepay}
          setChecked={setGooglepay}
        />
      </div>
      <div className="flex">
        <button
          className="bg-slate-300 py-2 px-4 text-lg"
          onClick={decrementStep}
        >
          Back
        </button>

        <button
          className="bg-slate-300 ml-auto py-2 px-4 text-lg"
          onClick={() => {
            const acceptedMethods = [];
            if (paylah) acceptedMethods.push("PayLah!");
            if (paynow) acceptedMethods.push("PayNow");
            if (googlepay) acceptedMethods.push("Google Pay");
            confirmSplit(summaryUserData, payeeNumber, acceptedMethods);
          }}
        >
          Confirm
        </button>
      </div>
    </>
  );
};
export default Summary;
