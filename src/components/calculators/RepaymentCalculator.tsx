"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/Button";

interface RepaymentResults {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  monthlyPaymentWithTBSG: number;
  monthlySavings: number;
  totalSavings: number;
}

export function RepaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(2000000);
  const [interestRate, setInterestRate] = useState<number>(11.5);
  const [loanTerm, setLoanTerm] = useState<number>(20);
  const [results, setResults] = useState<RepaymentResults | null>(null);

  useEffect(() => {
    calculate();
  }, [loanAmount, interestRate, loanTerm]);

  const calculate = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    // PMT formula: PMT = PV * [r(1+r)^n] / [(1+r)^n - 1]
    const monthlyPayment =
      loanAmount *
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;

    // Calculate with TBSG's better rate (0.95% lower)
    const tbsgRate = (interestRate - 0.95) / 100 / 12;
    const monthlyPaymentWithTBSG =
      loanAmount *
      (tbsgRate * Math.pow(1 + tbsgRate, numberOfPayments)) /
      (Math.pow(1 + tbsgRate, numberOfPayments) - 1);

    const monthlySavings = monthlyPayment - monthlyPaymentWithTBSG;
    const totalSavings = monthlySavings * numberOfPayments;

    setResults({
      monthlyPayment,
      totalPayment,
      totalInterest,
      monthlyPaymentWithTBSG,
      monthlySavings,
      totalSavings,
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
          Loan Details
        </h3>

        <div className="space-y-6">
          {/* Loan Amount */}
          <div>
            <label className="block text-sm font-medium text-tbsg-charcoal mb-2">
              Loan Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-tbsg-charcoal/50">R</span>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tbsg-primary focus:border-transparent"
              />
            </div>
            <input
              type="range"
              min="500000"
              max="10000000"
              step="100000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-tbsg-secondary mt-3"
            />
            <div className="flex justify-between text-xs text-tbsg-charcoal/50 mt-1">
              <span>R500K</span>
              <span>R10M</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block text-sm font-medium text-tbsg-charcoal mb-2">
              Interest Rate: {interestRate}%
            </label>
            <input
              type="range"
              min="8"
              max="15"
              step="0.25"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-tbsg-secondary"
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
              min="5"
              max="30"
              step="1"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-tbsg-secondary"
            />
            <div className="flex justify-between text-xs text-tbsg-charcoal/50 mt-1">
              <span>5 years</span>
              <span>30 years</span>
            </div>
          </div>
        </div>

        {/* Quick Select Amounts */}
        <div className="mt-8">
          <p className="text-sm font-medium text-tbsg-charcoal mb-3">Quick Select:</p>
          <div className="flex flex-wrap gap-2">
            {[1000000, 1500000, 2000000, 3000000, 5000000].map((amount) => (
              <button
                key={amount}
                onClick={() => setLoanAmount(amount)}
                className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                  loanAmount === amount
                    ? "bg-tbsg-secondary text-white border-tbsg-secondary"
                    : "border-gray-200 text-tbsg-charcoal hover:border-tbsg-secondary"
                }`}
              >
                {formatCurrency(amount)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-6">
        {/* Standard Repayment */}
        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
          <h3 className="font-heading font-bold text-xl text-tbsg-charcoal mb-6">
            Your Monthly Repayment
          </h3>

          {results && (
            <div className="space-y-4">
              <div className="text-center py-4">
                <p className="text-sm text-tbsg-charcoal/60 mb-1">Monthly Payment</p>
                <p className="text-4xl lg:text-5xl font-heading font-bold text-tbsg-charcoal">
                  {formatCurrency(results.monthlyPayment)}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-sm text-tbsg-charcoal/60 mb-1">Total Repayment</p>
                  <p className="text-lg font-heading font-bold text-tbsg-charcoal">
                    {formatCurrency(results.totalPayment)}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-tbsg-charcoal/60 mb-1">Total Interest</p>
                  <p className="text-lg font-heading font-bold text-tbsg-charcoal">
                    {formatCurrency(results.totalInterest)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* TBSG Savings */}
        <div className="bg-gradient-to-br from-tbsg-green to-emerald-600 rounded-2xl p-6 lg:p-8 text-white">
          <h3 className="font-heading font-bold text-xl mb-4">
            With TBSG&apos;s Better Rate
          </h3>
          <p className="text-white/80 text-sm mb-4">
            Our clients save an average of 0.95% on their interest rate
          </p>

          {results && (
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-white/80">Rate with TBSG</span>
                <span className="font-heading font-bold text-lg">
                  {(interestRate - 0.95).toFixed(2)}%
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-white/80">Monthly Payment</span>
                <span className="font-heading font-bold text-lg">
                  {formatCurrency(results.monthlyPaymentWithTBSG)}
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-white/80">Monthly Savings</span>
                <span className="font-heading font-bold text-xl text-white">
                  {formatCurrency(results.monthlySavings)}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-white font-medium">Total Savings Over {loanTerm} Years</span>
                <span className="font-heading font-bold text-2xl">
                  {formatCurrency(results.totalSavings)}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" href="/home-loans/get-preapproved" className="flex-1">
            Get Pre-Approved
          </Button>
          <Button variant="ghost" href="/home-loans/apply" className="flex-1">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}
