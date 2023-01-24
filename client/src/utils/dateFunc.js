export const isUnavailable = (room, datesToCompare) => {
    console.log(new Date(room.unavailableDates[0]).getTime())
    const isFound = room.unavailableDates.some((date) =>
    datesToCompare.includes(new Date(date).getTime())
    );

    return isFound;
};


export const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const dateInMilliseconds = new Date(start.getTime());

    const dates = [];

    while (dateInMilliseconds <= end) {
        dates.push(new Date(dateInMilliseconds).getTime());
        dateInMilliseconds.setDate(dateInMilliseconds.getDate() + 1);
    }

    return dates;
};
