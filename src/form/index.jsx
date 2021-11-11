import { useEffect, useState } from "react";

function Form() {
  const [FvalueB, setFValueB] = useState(null);
  const [FvalueC, setFValueC] = useState([
    { name: "FvalueA", value: "" },
    { name: "FvalueB", value: "" },
  ]);

  const updateValue = (e) => {
    const { name, value } = e.target;
    let Fvalue = [...FvalueC, { name, value }];
    Fvalue = [...new Map(Fvalue.map((item) => [item["name"], item])).values()];
    setFValueC(Fvalue);
  };

  function makeUnique(str1, str2) {
    let f1 =
      str1.split("").length > str2.split("").length
        ? str1.split("")
        : str2.split("");
    let f2 =
      str1.split("").length < str2.split("").length
        ? str1.split("")
        : str2.split("");
    let i = 0;

    while (i < f1?.length) {
      if (str1.split().length === 0 || str2.split().length === 0) {
        break;
      }
      console.log(str2);
      if (str2 && str1 && f2.includes(f1[i])) {
        str1 = str1?.replaceAll(f1[i], "");
        str2 = str2?.replaceAll(f1[i], "");
      }
      i++;
    }
    return [str1, str2];
  }

  useEffect(() => {
    let str1 = FvalueC[0].value;
    let str2 = FvalueC[1].value;
    setFValueB(makeUnique(str1, str2));
  }, [FvalueC]);

  return (
    <div>
      <div className="formBody">
        {FvalueC?.map((fval) => {
          return (
            <div className="formField" key={fval.name}>
              <label>{fval.name}</label>
              <input
                type="text"
                name={`${fval.name}`}
                value={fval.value}
                className="textField"
                onChange={(e) => updateValue(e)}
              />
            </div>
          );
        })}
      </div>
      <div className="formValues">
        {FvalueB &&
          FvalueB?.map((value, index) => {
            return (
              <div className="formValueFeilds" key={value + index}>
                <span>
                  value {index + 1} : {value}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Form;
