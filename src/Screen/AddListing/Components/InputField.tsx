
import '@/Screen/AddListing/Components/style.css'


interface InputFieldProps {
  item: {
    name: string;
    fieldtype: "text" | "number";
    placeholder: string;
    required?: boolean;
  };
  handelInputChange: (name: string, value: string) => void; // Define the type
}


const InputField: React.FC<InputFieldProps> = ({ item, handelInputChange  }) => {
 
  const getData = (e: React.ChangeEvent<HTMLInputElement>) => {
    handelInputChange(item.name, e.target.value);
  };
  
  return (
    <input
      type={item.fieldtype}
      name={item.name}
      placeholder={item.placeholder}
      className="w-full mt-3 border shadowl rounded-xl p-3"
      onChange={getData}
      required={item.required}
    />
  );
};

export default InputField;

