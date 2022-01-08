import { FC, useEffect, useState } from "react";
import { LineItem, User } from "../../types";
import { GST_RATE, SERVICE_RATE } from "../../constants";
import Checkbox from "../Forms/Checkbox";
import UserSummary from "../UserSummary/UserSummary";
import TextInput from "../Forms/TextInput";
import Button from "../Forms/Button";
import FeedbackBox from "../Forms/FeedbackBox";
import { Transition } from "@headlessui/react";
const cloneDeep = require("lodash.clonedeep");

type Props = {
  show: boolean;
  lineItems: LineItem[];
  users: User[];
  decrementStep: () => void;
  incrementStep: () => void;
  confirmSplit: (
    users: User[],
    phoneNumber: string,
    acceptedMethods: string[]
  ) => void;
};

const Summary: FC<Props> = ({
  show,
  lineItems,
  users,
  decrementStep,
  incrementStep,
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
    <Transition
      show={show}
      enter="transition-opacity duration-150"
      enterFrom="opacity-40"
      enterTo="opacity-100"
    >
      <>
        <h1 className="py-2 split-header text-center w-full font-bold text-white">
          Summary
        </h1>
        <FeedbackBox
          show={unsharedItems}
          message="Note: You still have items that were not split between anyone"
        />
        <div className="flex flex-col gap-2">
          {summaryUserData.map((user) => {
            return <UserSummary key={user.id} user={user} />;
          })}
        </div>
        <div className="mt-6 px-2 gap-1 flex flex-col items-start bg-opacity-5 bg-white rounded-lg">
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
        <div className="px-2">
          <div className="text-xl text-white mt-8 py-1">Payee Details</div>
          <label className="text-white mb-1">Phone Number:</label>
          <TextInput value={payeeNumber} update={SetPayeeNumber} />
          <div className="flex flex-col gap-1 items-start mt-4 bg-opacity-5 bg-white rounded-lg">
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
        </div>
        <div className="flex mt-4">
          <Button className="button" onClick={decrementStep}>
            Back
          </Button>

          <Button
            className="button ml-auto"
            onClick={() => {
              const acceptedMethods = [];
              if (paylah) acceptedMethods.push("PayLah!");
              if (paynow) acceptedMethods.push("PayNow");
              if (googlepay) acceptedMethods.push("Google Pay");
              confirmSplit(summaryUserData, payeeNumber, acceptedMethods);
              incrementStep();
            }}
          >
            Confirm
          </Button>
        </div>{" "}
      </>
    </Transition>
  );
};
export default Summary;
