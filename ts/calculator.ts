// data:
// initial amount
// annual contribution
// expected return
// duration

type InvestmentData = {
    initialAmount:number, // Initial investment figure which is deposited at the beginning of an investment.
    annualContribution:number, // Amount of money which is paid by the investor into the investment annually.
    expectedReturn:number, // APR for the investment per year.
    duration:number // Number of years of the investment.
};

type InvestmentResult = {
    year:string,
    totalAmount:number,
    totalContribution:number,
    totalInterestEarned:number
}

type CalculationResult = InvestmentResult[]|string

function calculateInvest(data:InvestmentData):CalculationResult{
    // Data need to be destructure the object. 
    const {initialAmount,annualContribution,expectedReturn,duration} = data;
    let total = initialAmount;
    let totalContribution = 0;
    let totalInterestEarned = 0;

    // Check inputs to make sure inputs ar valid and no empty.
    if(initialAmount <= 0){
        if(initialAmount < 0){
            return 'Initial investment must be at least zero';
        }else{
            return'For better investment return, deposit at least $100';
        }
    };
    if(duration <= 0 ){
        return 'No valid amount of years provided. Select at least 1Year';
    };
    if ( expectedReturn < 0 ){
        total = 0
        return 'Expected return must be at least zero!';
    };
    const annualResults:InvestmentResult[] = [];

    for(let i = 0; i < duration; i++){
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContribution - initialAmount;
        totalContribution = totalContribution + annualContribution;
        total = total + annualContribution;

        annualResults.push({
            year:`Year ${i+1}`,
            totalAmount:total,
            totalInterestEarned,
            totalContribution
        })
    }
    return annualResults
}

function printResults(results:CalculationResult){
    if(typeof results === 'string'){
        console.log(results);
        return
    }
    for(const yearResults of results){
        console.log(yearResults.year);
        console.log(`Total for this year is: ${yearResults.totalAmount.toFixed(0)}`);
        console.log(`Interests earned this year:${yearResults.totalInterestEarned.toFixed(0)}`);
        console.log(`Total contribution for this year:${yearResults.totalContribution.toFixed(0)}`);
        console.log(`--------------------------------------`);
    }
}


let investment:InvestmentData = {
    initialAmount:20000,
    annualContribution: 4000,
    expectedReturn:0.08,
    duration:20
}


const results = calculateInvest(investment);

printResults(results)

