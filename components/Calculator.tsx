'use client';
import { useState } from 'react';
import { Line } from './Calc.shared';

const RATE = 88;
const LEVELS = [
  { name: 'Foundation Certificate', fee: 48000, ai: false },
  { name: 'Diploma', fee: 81000, ai: true },
  { name: 'Bachelor\u2019s Degree', fee: 180000, ai: true },
  { name: 'Master\u2019s Degree', fee: 450000, ai: true },
];
const inr = (n: number) => '\u20B9' + Math.round(n).toLocaleString('en-IN');
const usd = (n: number) => '$' + Math.round(n / RATE).toLocaleString('en-US');

export default function Calculator() {
  const [program, setProgram] = useState('Information Technology');
  const [upto, setUpto] = useState('3');
  const [waiver, setWaiver] = useState('0');
  const [plan, setPlan] = useState('term');

  const u = parseInt(upto, 10);
  const picked = u === 4 ? [LEVELS[3]] : LEVELS.slice(0, u);
  const mult = program === 'Artificial Intelligence' ? 1.1 : 1;
  const lines = picked.map((l) => ({ label: l.name, value: inr(l.fee * (l.ai ? mult : 1)) }));
  const sub = picked.reduce((a, l) => a + l.fee * (l.ai ? mult : 1), 0);
  const wv = parseInt(waiver, 10) / 100;
  const reg = 1000;
  const after = sub * (1 - wv);
  const adj = plan === 'full' ? -0.03 * after : plan === 'monthly' ? 0.02 * after : 0;
  const payable = after + adj;
  if (wv > 0) lines.push({ label: 'Fee waiver ' + wv * 100 + '%', value: '-' + inr(sub * wv) });
  if (adj !== 0) lines.push({ label: plan === 'full' ? 'Pay-in-full discount' : 'Monthly plan charge', value: (adj < 0 ? '-' : '+') + inr(Math.abs(adj)) });
  lines.push({ label: 'Registration (once)', value: inr(reg) });
  const n = plan === 'full' ? 1 : plan === 'term' ? picked.length * 2 : Math.max(6, picked.length * (u === 4 ? 24 : 6));

  return (
    <div className="calc">
      <div className="card">
        <div className="field"><label htmlFor="c1">Program</label>
          <select id="c1" value={program} onChange={(e) => setProgram(e.target.value)}>
            <option>Information Technology</option><option>Artificial Intelligence</option>
          </select></div>
        <div className="field"><label htmlFor="c2">Up to which level?</label>
          <select id="c2" value={upto} onChange={(e) => setUpto(e.target.value)}>
            <option value="1">Foundation Certificate only</option><option value="2">Foundation to Diploma</option>
            <option value="3">Foundation to Bachelor&rsquo;s</option><option value="4">Master&rsquo;s only</option>
          </select></div>
        <div className="field"><label htmlFor="c3">Fee waiver</label>
          <select id="c3" value={waiver} onChange={(e) => setWaiver(e.target.value)}>
            <option value="0">None</option><option value="25">25% waiver</option><option value="50">50% waiver</option>
          </select></div>
        <div className="field"><label htmlFor="c4">Payment plan</label>
          <select id="c4" value={plan} onChange={(e) => setPlan(e.target.value)}>
            <option value="full">Pay in full (3% off)</option><option value="term">Two instalments per level</option><option value="monthly">Monthly (2% charge)</option>
          </select></div>
      </div>
      <div className="card" aria-live="polite">
        {lines.map((l) => <Line key={l.label} label={l.label} value={l.value} />)}
        <div className="total">{inr(payable + reg)}</div>
        <p className="muted">about {usd(payable + reg)}</p>
        <p className="muted">{n === 1 ? '1 payment' : n + ' payments'} of about {inr(payable / n)}</p>
        <p className="muted small">Estimate only, at &#8377;88 to the US dollar. AI costs 10% more from Diploma level.</p>
      </div>
    </div>
  );
}
