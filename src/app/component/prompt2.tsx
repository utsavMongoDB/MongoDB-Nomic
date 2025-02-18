import "../fonts.css";
import { useState, useRef } from "react";
import LeafyGreenProvider from "@leafygreen-ui/leafygreen-provider";
import { NumberInput } from "@leafygreen-ui/number-input";
import TextInput from "@leafygreen-ui/text-input"
import Button from "@leafygreen-ui/button";
import Icon from "@leafygreen-ui/icon";

export const Days = () => {
    return (
        <div>
            <NumberInput
                label="🗓 Duration "
                unit="Days"
                placeholder="3, 5, etc."
                unitOptions={[
                    {
                        displayName: "Days",
                        value: "days"
                    }
                ]}
                onSelectChange={() => { }}
            />
        </div>
    );
};

interface TextInputProps {
    label: string;
    placeholder: string;
}

export const CustomTextInput = ({ label, placeholder }: TextInputProps) => {
    return (
        <TextInput
            label={label}
            placeholder={placeholder}
        />
    )
}

interface PlanButtonProps {
    onClick: () => void;
    isLoading: boolean;
}

export const PlanButton = ({ onClick, isLoading }: PlanButtonProps) => {
    return (
        <Button
            type="submit"
            rightGlyph={<Icon glyph="Sparkle" />}
            variant="baseGreen"
            isLoading={isLoading}
            loadingText={"working on it..."}
            onClick={onClick}
            style={{ alignSelf: "center", width: "15%", height: '6vh' }}
        >
            Make It Happen
        </Button>
    )
}

// export default function PromptInput() {
//     const [isLoading, setIsLoading] = useState(false);
//     const handleClick = () => {
//         setIsLoading(true);
//         setTimeout(() => {
//             setIsLoading(false);
//         }, 2000);
//     };

//     return (
//         <div className="chat-window">
//             <div className="prompt-options">
//                 <Days />
//                 <CustomTextInput
//                     label="📍 Planning to visit"
//                     placeholder="Bahamas, Vegas, etc."
//                 />
//                 <CustomTextInput
//                     label="🎨 Theme"
//                     placeholder="Art, Adventure, etc."
//                 />
//                 <CustomTextInput
//                     label="👥 Traveling with"
//                     placeholder="Friends, Family, etc."
//                 />
//                 <CustomTextInput
//                     label="Other specification(s)"
//                     placeholder="Museum, Beach, etc."
//                 />
//                 <div style={{ borderLeft: "2px solid #ccc", height: "100%", margin: "0 20px" }}></div>
//             </div>
            
//             <PlanButton onClick={handleClick} isLoading={isLoading} />
//         </div>
//     );
// }