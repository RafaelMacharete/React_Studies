type Props = {
    rate: number;
}

export const EmojiRating = ({ rate }: Props) => {
    if (rate > 5) rate = 5;
    if (rate < 0) rate = 0;


    const rateInt = Math.floor(rate);

    // let emoji = rateInt == 1 ? '😢' :
    //     rateInt == 2 ? '☹' :
    //         rateInt == 3 ? '😐' :
    //             rateInt == 4 ? '😃' : '😁'    
    
    // const stars = emoji.repeat(rateInt) + '😶'.repeat(5 - rateInt);
    
    const emojis = ['', '😢', '☹', '😐', '😃', '😁'];
    const stars = `${emojis[rateInt]}`.repeat(rateInt) + '😶'.repeat(5 - rateInt);

    
    return (
        <div className="flex item-center text-6xl">
            <div>{rate.toFixed(1)}</div>
            <div>{stars}</div>
        </div>
    );
}