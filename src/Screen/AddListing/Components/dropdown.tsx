
import '@/Screen/AddListing/Components/style.css'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


interface InputFieldProps {
    item: {
        name: string;
        options: string[];
        
    };
    handelInputChange: (name: string, value: any) => void;
}

const InputField: React.FC<InputFieldProps> = ({ item, handelInputChange }) => {
    return (
        <>
            <Select onValueChange={(value: any) => handelInputChange(item.name, value)}>
                <SelectTrigger className="w-full h-[3.2rem] border shadowl rounded-xl mt-3">
                    <SelectValue placeholder={item.options[0]} />
                </SelectTrigger>
                <SelectContent>
                    {item.options.map((option) => (
                        <SelectItem key={option} value={option}>
                            {option}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

        </>
    );
};

export default InputField;

