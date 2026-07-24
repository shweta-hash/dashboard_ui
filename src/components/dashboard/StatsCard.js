import {
  Card,
  CardContent,
} from "@/components/ui/card"

export default function StatsCard({
    icon, 
    title, 
    value,
    income,
    percentage,
    bgColor,
    textColor,
    cardWidth,
    cardHeight,
    iconBg,
    titleTextColor,
    percentageTextColor,
    incomeTextColor
}){
    return(
        <Card className={`${cardWidth} ${bgColor} ${cardHeight}`}>
            <CardContent className="p-6 ">
                <div className = "flex flex-col gap-6">

                    {/* row 1 of card*/}
                    <div className = "flex justify-between items-start">
                        {/* left side of row 1 */}
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBg}`}>
                            {icon}
                        </div>
                        {/* right side of row 1 */}
                        <div className="flex flex-col items-end">
                            <h2 className={`text-3xl ${textColor}`}>
                                {value}
                            </h2>
                            <p className={`text-sm ${titleTextColor}`}>
                                {title}
                            </p>
                        </div>
                    </div>

                    {/* row 2 of card */}
                    <div className="flex justify-between items-start">
                        {/* left side of row 2 */}
                        <div>
                            <p className={`text-sm ${incomeTextColor}`} >
                                Total Income: {income}
                            </p>
                        </div>

                        {/* right side of row 2 */}
                        <div>
                            <p className={`text-sm font-medium ${percentageTextColor}`}>
                                ▲ {percentage}
                            </p>                        
                        </div>
                    </div>
                </div>

            </CardContent>

        </Card>
    )
}