"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/Button";

interface BridgingResults {
  grossProceeds: number;
  netProceeds: number;
  maxAdvance: number;
  estimatedDays: number;
  dailyRate: number;
  estimatedCost: number;
  totalRepayment: number;
  netAfterBridging: number;
}

export function BridgingCalculator() {
  const [salePrice, setSalePrice] = useState<number>(2000000);
  const [existingBond, setExistingBond] = useState<number>(800000);
  const [agentCommission, setAgentCommission] = useState<number>(5);
  const [transferCosts, setTransferCosts] = useState<number>(50000);
  const [advancePercent, setAdvancePercent] = useState<number>(80);
  const [expectedDays, setExpectedDays] = useState<number>(60);
  const [dailyRatePercent, setDailyRatePercent] = useState<number>(0.15);
  const [results, setResults] = useState<BridgingResults | null>(null);

  useEffect(() => {
    calculate();
  }, [salePrice, existingBond, agentCommission, transferCosts, advancePercent, expectedDays, dailyRatePercent]);

  const calculate = () => {
    const commissionAmount = salePrice * (agentCommission / 100);
    const grossProceeds = salePrice - existingBond;
    const netProceeds = grossProceeds - commissionAmount - transferCosts;
    const maxAdvance = netProceeds * (advancePercent / 100);
    const dailyRate = dailyRatePercent / 100;
    const estimatedCost = maxAdvance * dailyRate * expectedDays;
    const totalRepayment = maxAdvance + estimatedCost;
    const netAfterBridging = netProceeds - estimatedCost;

    setResults({
      grossProceeds,
      netProceeds,
      maxAdvance,
      estimatedDays: expectedDays,
      dailyRate: dailyRatePercent,
      estimatedCost,
      totalRepayment,
      netAfterBridging,
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
          Your Property Sale Details
        </h3>

        <div className="space-y-6">
          {/* Sale Price */}
          <div>
            <label className="block text-sm font-medium text-tbsg-charcoal mb-2">
              Sale Price
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-tbsg-charcoal/50">R</span>
              <input
                type="number"
                value={salePrice}
                onChange={(e) => setSalePrice(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tbsg-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Existing Bond */}
          <div>
            <label className="block text-sm font-medium text-tbsg-charcoal mb-2">
              Existing Bond Balance
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-tbsg-charcoal/50">R</span>
              <input
                type="number"
                value={existingBond}
                onChange={(e) => setExistingBond(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tbsg-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Agent Commission */}
          <div>
            <label className="block text-sm font-medium text-tbsg-charcoal mb-2">
              Agent Commission: {agentCommission}%
            </label>
            <input
              type="range"
              min="0"
              max="8"
              step="0.5"
              value={agentCommission}
              onChange={(e) => setAgentCommission(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-tbsg-primary"
            />
            <div className="flex justify-between text-xs text-tbsg-charcoal/50 mt-1">
              <span>0%</span>
              <span>8%</span>
            </div>
          </div>

          {/* Transfer Costs */}
          <div>
            <label className="block text-sm font-medium text-tbsg-charcoal mb-2">
              Estimated Transfer Costs
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-tbsg-charcoal/50">R</span>
              <input
                type="number"
                value={transferCosts}
                onChange={(e) => setTransferCosts(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tbsg-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Advance Percentage */}
          <div>
            <label className="block text-sm font-medium text-tbsg-charcoal mb-2">
              Advance Percentage: {advancePercent}%
            </label>
            <input
              type="range"
              min="10"
              max="80"
              step="5"
              value={advancePercent}
              onChange={(e) => setAdvancePercent(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-tbsg-primary"
            />
            <div className="flex justify-between text-xs text-tbsg-charcoal/50 mt-1">
              <span>10%</span>
              <span>80% (max for sellers)</span>
            </div>
          </div>

          {/* Expected Days */}
          <div>
            <label className="block text-sm font-medium text-tbsg-charcoal mb-2">
              Expected Days Until Transfer: {expectedDays} days
            </label>
            <input
              type="range"
              min="14"
              max="120"
              step="7"
              value={expectedDays}
              onChange={(e) => setExpectedDays(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-tbsg-primary"
            />
            <div className="flex justify-between text-xs text-tbsg-charcoal/50 mt-1">
              <span>2 weeks</span>
              <span>4 months</span>
            </div>
          </div>

          {/* Daily Rate */}
          <div>
            <label className="block text-sm font-medium text-tbsg-charcoal mb-2">
              Daily Rate: {dailyRatePercent}%
            </label>
            <input
              type="range"
              min="0.10"
              max="0.20"
              step="0.01"
              value={dailyRatePercent}
              onChange={(e) => setDailyRatePercent(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-tbsg-primary"
            />
            <div className="flex justify-between text-xs text-tbsg-charcoal/50 mt-1">
              <span>0.10%</span>
              <span>0.20%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-tbsg-primary to-tbsg-secondary rounded-2xl p-6 lg:p-8 text-white">
          <h3 className="font-heading font-bold text-xl mb-6">
            Your Bridging Estimate
          </h3>

          {results && (
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-white/80">Gross Proceeds</span>
                <span className="font-heading font-bold text-lg">
                  {formatCurrency(results.grossProceeds)}
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-white/80">Less Commission & Costs</span>
                <span className="font-heading font-bold text-lg">
                  -{formatCurrency(salePrice * (agentCommission / 100) + transferCosts)}
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-white/80">Net Proceeds</span>
                <span className="font-heading font-bold text-lg">
                  {formatCurrency(results.netProceeds)}
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-white/80">Maximum Advance ({advancePercent}%)</span>
                <span className="font-heading font-bold text-2xl text-white">
                  {formatCurrency(results.maxAdvance)}
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-white/80">Estimated Cost ({expectedDays} days @ {dailyRatePercent}%/day)</span>
                <span className="font-heading font-bold text-lg">
                  {formatCurrency(results.estimatedCost)}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-white font-medium">Net After Bridging</span>
                <span className="font-heading font-bold text-xl">
                  {formatCurrency(results.netAfterBridging)}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="bg-tbsg-light rounded-xl p-6">
          <p className="text-sm text-tbsg-charcoal/70">
            <strong>Disclaimer:</strong> This calculator provides estimates only.
            Actual advance amounts, rates, and costs depend on your specific circumstances
            and are subject to approval. Contact us for a personalised quote.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" href="/bridging-finance/sellers" className="flex-1">
            Apply for Bridging
          </Button>
          <Button variant="ghost" href="/contact" className="flex-1">
            Get a Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
