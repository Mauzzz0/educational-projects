


const result = traffic.reduce(
      (result, item) => {
        if (loadedProtocols.indexOf(item.protocol) != -1) {
          return result;
        }

        const data = traffic
          .filter((item2) => item2.protocol === item.protocol)
          .map((item3) => {
            const { protocol, ...others } = item3;

            return others;
          });

        if (result.count == -1) result.count = data.length;

        loadedProtocols.push(item.protocol);

        result.protocolList = [
          ...result.protocolList,
          { protocol: item.protocol, data },
        ];
        return result;
      },
      {
        serviceId,
        prefix,
        count: -1,
        protocolList: [],
      },
    );

// array foreach * 2 + filtering
// const euros = [10, 20, 30, 40];
// const doubled = euros.reduce((total, amount) => {
//   if (amount * 2 > 30) {
//     total.push(amount * 2);
//   }
//   return total;
// }, []);
// console.log(doubled);

// array foreach * 2
// const euros = [10, 20, 30, 40];
// const doubled = euros.reduce((total, amount) => {
//   total.push(amount * 2);
//   return total;
// }, []);
// console.log(doubled);

// average v1 with startpoint 100
// const euros = [10, 20, 30, 40];
// const average = euros.reduce((total, amount, index, array) => {
//   if (index === array.length - 1) {
// console.log("last", total, array.length);
// return (total+amount) / array.length;
//   }
//   return total + amount;
// }, 100);
// console.log(average);

// average v2
// let euros = [1, 2, 3, 4];
// let sum = euros.reduce((total, amount, index, array) => {
//   total += amount;
//   if (index === array.length - 1) {
// return total / array.length;
//   } else {
// return total;
//   }
// });
// console.log(sum);

// sum
// const euros = [1, 2, 3];
// const sum = euros.reduce((total, amount, g) => g / (total + amount));
// console.log(sum);
