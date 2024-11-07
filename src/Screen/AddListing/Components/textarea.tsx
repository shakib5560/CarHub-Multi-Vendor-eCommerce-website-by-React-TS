import { Textarea } from "@/components/ui/textarea"
import '@/Screen/AddListing/Components/style.css'

interface InputFieldProps {
    item: {
      placeholder: string;
      name: string;
    };
    handelInputChange: (name: string, value: string) => void;
  }


const TextareaDemo: React.FC<InputFieldProps> = ({ item, handelInputChange }) => {
    return <Textarea className="mt-3 w-full shadowl" onChange={(e) => handelInputChange(item.name, e.target.value)} placeholder={item.placeholder} />
  };
  
  export default TextareaDemo;
  