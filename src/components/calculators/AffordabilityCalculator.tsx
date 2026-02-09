"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/Button";

interface AffordabilityResults {
  grossIncome: number;
  totalDeductions: number;
  netIncome: number;
  maxInstalment: number;
  estimatedBondAmount: number;
  estimatedPurchasePrice: number;
  depositRequired: number;
}

export function AffordabilityCalculator() {
  const [grossIncome, setGrossIncome] = useState<number>(50000);
  const [otherIncome, setOtherIncome] = useState<number>(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(15000);
  const [existingDebt, setExistingDebt] = useState<number>(3000);
  const [depositAmount, setDepositAmount] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(11.5);
  const [loanTerm, setLoanTerm] = useState<number>(20);
  const [results, setResults] = useState<AffordabilityResults | null>(null);

  useEffect(() => {
    calculate();
  }, [grossIncome, otherIncome, monthlyExpenses, existingDebt, depositAmount, interestRate, loanTerm]);

  const calculate = () => {
    const totalGrossIncome = grossIncome + otherIncome;
    const totalDeductions = monthlyExpenses + existingDebt;
    const netIncome = totalGrossIncome - totalDeductions;

    // Banks typically allow 30% of gross income for bond repayment
    const maxInstalment = totalGrossIncome * 0.30;

    // Calculate maximum bond amount using PMT formula reversed
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    // PV = PMT * [(1 - (1 + r)^-n) / r]
    const presentValueFactor = (1 - Math.pow(1 + monthlyRate, -numberOfPayments)) / monthlyRate;
    const estimatedBondAmount = maxInstalment * presentValueFactor;

    // Purchase price = bond + deposit
    const estimatedPurchasePrice = estimatedBondAmount + depositAmount;

    // Typical deposit requirement (varies by bank)
    const depositRequired = estimatedPurchasePrice * 0.10;

    setResults({
      grossIncome: totalGrossIncome,
      totalDeductions,
      netIncome,
      maxInstalment,
      estimatedBondAmount,
      estimatedPurchasePrice,
      depositRequired,
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Input Section */}
      <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
        <h3 className="font-heading font-bold text-xl text-tbsg-charcoal mb-6">
          Your Financial Details
        </h3>

        <div className="space-y-6">
          {/* Gross Income */}
          <div>
            <label className="block text-sm font-medium text-tbsg-charcoal mb-2">
              Gross Monthly Income (Before Tax)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-tbsg-charcoal/50">R</span>
              <input
                type="number"
                value={grossIncome}
                onChange={(e) => setGrossIncome(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tbsg-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Other Income */}
          <div>
            <label className="block text-sm font-medium text-tbsg-charcoal mb-2">
              Other Monthly Income (Rental, etc.)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-tbsg-charcoal/50">R</span>
              <input
                type="number"
                value={otherIncome}
                onChange={(e) => setOtherIncome(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tbsg-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Monthly Expenses */}
          <div>
            <label className="block text-sm font-medium text-tbsg-charcoal mb-2">
              Monthly Living Expenses
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-tbsg-charcoal/50">R</span>
              <input
                type="number"
                value={monthlyExpenses}
                onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tbsg-primary focus:border-transparent"
              />
            </div>
            <p className="text-xs text-tbsg-charcoal/50 mt-1">Food, transport, utilities, insurance, etc.</p>
          </div>

          {/* Existing Debt */}
          <div>
            <label className="block text-sm font-medium text-tbsg-charcoal mb-2">
              Existing Monthly Debt Repayments
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-tbsg-charcoal/50">R</span>
              <input
                type="number"
                value={existingDebt}
                onChange={(e) => setExistingDebt(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tbsg-primary focus:border-transparent"
              />
            </div>
            <p className="text-xs text-tbsg-charcoal/50 mt-1">Car payments, credit cards, personal loans, etc.</p>
          </div>

          {/* Deposit */}
          <div>
            <label className="block text-sm font-medium text-tbsg-charcoal mb-2">
              Available Deposit
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-tbsg-charcoal/50">R</span>
              <input
                type="number"
                value={depositAmount}
                onChange={(e) => setDepositAmount(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tbsg-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block text-sm font-medium text-tbsg-charcoal mb-2">
              Expected Interest Rate: {interestRate}%
            </label>
            <input
              type="range"
              min="8"
              max="15"
              step="0.25"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-tbsg-green"
            />
            <div className="flex justify-between text-xs text-tbsg-charcoal/50 mt-1">
              <span>8%</span>
              <span>15%</span>
            </div>
          </div>

          {/* Loan Term */}
          <div>
            <label className="block text-sm font-medium text-tbsg-charcoal mb-2">
              Loan Term: {loanTerm} years
            </label>
            <input
              type="range"
              min="10"
              max="30"
              step="5"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-tbsg-green"
            />
            <div className="flex justify-between text-xs text-tbsg-charcoal/50 mt-1">
              <span>10 years</span>
              <span>30 years</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-tbsg-green to-emerald-600 rounded-2xl p-6 lg:p-8 text-white">
          <h3 className="font-heading font-bold text-xl mb-6">
            What You Could Afford
          </h3>

          {results && (
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-white/80">Total Monthly Income</span>
                <span className="font-heading font-bold text-lg">
                  {formatCurrency(results.grossIncome)}
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-white/80">Max Monthly Instalment (30%)</span>
                <span className="font-heading font-bold text-lg">
                  {formatCurrency(results.maxInstalment)}
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-white/80">Estimated Bond Amount</span>
                <span className="font-heading font-bold text-xl">
                  {formatCurrency(results.estimatedBondAmount)}
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-white/80">Your Deposit</span>
                <span className="font-heading font-bold text-lg">
                  {formatCurrency(depositAmount)}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-white font-medium">Estimated Purchase Price</span>
                <span className="font-heading font-bold text-2xl">
                  {formatCurrency(results.estimatedPurchasePrice)}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Savings with TBSG */}
        <div className="bg-tbsg-primary/10 rounded-xl p-6">
          <h4 className="font-heading font-bold text-tbsg-primary mb-2">
            With TBSG&apos;s 0.95% Better Rate
          </h4>
          {results && (
            <p className="text-tbsg-charcoal/70">
              At {(interestRate - 0.95).toFixed(2)}% instead of {interestRate}%, you&apos;d save approximately{" "}
              <strong className="text-tbsg-green">
                {formatCurrency(results.maxInstalment * 0.03)}
              </strong>{" "}
              per month on the same loan.
            </p>
          )}
        </div>

        {/* Disclaimer */}
        <div className="bg-tbsg-light rounded-xl p-6">
          <p className="text-sm text-tbsg-charcoal/70">
            <strong>Disclaimer:</strong> This is an estimate only. Actual affordability depends
            on your full financial profile, credit score, and the bank&apos;s assessment criteria.
            Get pre-approved for an accurate amount.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" href="/home-loans/get-preapproved" className="flex-1">
            Get Pre-Approved
          </Button>
          <Button variant="ghost" href="/contact" className="flex-1">
            Speak to an Advisor
          </Button>
        </div>
      </div>
    </div>
  );
}
