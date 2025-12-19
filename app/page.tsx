"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { HellBackground } from "@/components/HellBackground";
import { Flame, Skull, ChevronsDown } from "lucide-react";
import { useState } from "react";

// --- SUB-COMPONENTS ---

const CommandmentCard = ({ number, title, text }: { number: string; title: string; text: string }) => (
  <motion.div 
    whileHover={{ scale: 1.02, backgroundColor: "rgba(196, 87, 74, 0.1)" }}
    className="border border-hell-orange/20 bg-hell-charcoal/50 p-6 rounded-lg backdrop-blur-sm relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-serif text-hell-orange select-none">{number}</div>
    <h3 className="text-xl 2k:text-3xl font-bold text-hell-orange mb-2 font-serif flex items-center gap-2">
      <span className="text-hell-red">{number}.</span> {title}
    </h3>
    <p className="text-gray-400 2k:text-xl font-light">{text}</p>
    <div className="absolute bottom-0 left-0 h-1 w-0 bg-hell-flame transition-all duration-500 group-hover:w-full" />
  </motion.div>
);

const RoadmapItem = ({ phase, title, items, status }: { phase: string; title: string; items: string[]; status: string }) => (
  <div className="relative border-l-2 border-hell-red/30 pl-8 pb-12 last:pb-0">
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-hell-flame animate-pulse" />
    <h3 className="text-2xl 2k:text-4xl font-bold text-hell-orange mb-1">{phase}</h3>
    <h4 className="text-xl 2k:text-2xl text-white mb-4 italic opacity-80">{title}</h4>
    <ul className="space-y-2 mb-4">
      {items.map((item, i) => (
        <li key={i} className="text-gray-400 2k:text-xl flex items-start gap-2">
          <span className="text-hell-red mt-1">➢</span> {item}
        </li>
      ))}
    </ul>
    <div className="inline-block px-3 py-1 bg-hell-red/20 border border-hell-red text-hell-flame text-xs 2k:text-lg rounded">
      STATUS: {status}
    </div>
  </div>
);

// --- MAIN PAGE ---

export default function Home() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x666...DEVIL...ADDRESS"; 

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen text-gray-200 font-sans selection:bg-hell-red selection:text-white overflow-x-hidden">
      <HellBackground />
      
      {/* HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hell-banner.jpg" 
            alt="Hellscape" 
            fill 
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hell-dark/50 to-hell-dark" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-6 mx-auto w-32 h-32 relative md:w-48 md:h-48 rounded-full border-4 border-hell-orange/30 overflow-hidden shadow-[0_0_50px_rgba(232,160,71,0.3)]">
                <Image src="/images/hell-logo.png" alt="Logo" fill className="object-cover" />
            </div>
            <h1 className="text-5xl md:text-8xl 2k:text-9xl font-black tracking-tighter text-white mb-4 drop-shadow-lg font-serif">
              ABANDON HOPE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hell-orange to-hell-red">
                ACQUIRE $666
              </span>
            </h1>
            <p className="text-xl md:text-2xl 2k:text-4xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
              Welcome to Hell. At least here, the candles are always red.
              Most died on the way down. The devil is just watching.
            </p>
            <button className="bg-hell-red hover:bg-hell-blood text-white text-lg 2k:text-2xl font-bold py-4 px-10 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(196,87,74,0.5)]">
              ENTER HELL
            </button>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-hell-orange"
        >
          <ChevronsDown size={40} />
        </motion.div>
      </section>

      {/* GENESIS */}
      <Section className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-hell-orange mb-12">
          IN THE BEGINNING, THERE WAS GREED
        </h2>
        <div className="space-y-6 text-lg md:text-2xl 2k:text-3xl leading-relaxed text-gray-300">
          <p>Every project promised Heaven. They all delivered Hell.</p>
          <p className="italic text-hell-flame">"Utility. Roadmap. Community-driven."</p>
          <p>The holy trinity of lies. Someone said "generational wealth." Someone else said "we're early."</p>
          <p>Then the rug pulled. As it always does. Thousands burned. Millions lost. Lessons unlearned.</p>
          <div className="py-8">
            <p className="text-3xl font-bold text-white">In the ashes of a thousand broken promises, <br/><span className="text-hell-red">HELLCOIN rose.</span></p>
          </div>
          <p className="text-hell-orange font-bold uppercase tracking-widest">
            We don't promise the moon. We promise the heat.
          </p>
        </div>
      </Section>

      {/* LORE */}
      <Section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 relative">
            <div className="relative w-full aspect-square rounded-full border border-hell-red/20 bg-gradient-to-b from-hell-charcoal to-black p-8 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-hell-red/10 mix-blend-overlay"></div>
                <Image src="/images/hell-logo.png" width={400} height={400} alt="Enlightened Devil" className="relative z-10 drop-shadow-2xl" />
            </div>
        </div>
        <div className="order-1 md:order-2 text-left">
            <h2 className="text-hell-flame text-sm font-bold tracking-widest mb-2">THE LORE</h2>
            <h3 className="text-4xl md:text-5xl 2k:text-7xl font-serif font-bold text-white mb-6">THE LEGEND OF THE ENLIGHTENED DEVIL</h3>
            <p className="text-gray-400 text-lg 2k:text-2xl mb-6">
                There was once a trader. Eager. Optimistic. Fucked. He bought every top. Sold every bottom. 
                But in his darkest hour, burning in the hell of his own making, something changed.
            </p>
            <p className="text-gray-400 text-lg 2k:text-2xl mb-6">
                He stopped running from the fire. He sat down in the flames. He smiled. 
                He became the devil. Not evil. Not cruel. Just <span className="text-hell-orange font-bold">enlightened</span>.
            </p>
            <blockquote className="border-l-4 border-hell-red pl-6 py-2 italic text-xl text-white">
                "He was you once. And you'll be him eventually."
            </blockquote>
        </div>
      </Section>

      {/* COMMANDMENTS */}
      <Section className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-hell-orange mb-4">THE 10 COMMANDMENTS OF HELL</h2>
            <p className="text-xl text-gray-400">Thou Shalt...</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CommandmentCard number="I" title="BUY THE TOP" text="Wait until the candle is vertical and your hands are shaking. FOMO is not a feeling. It's a divine calling." />
            <CommandmentCard number="II" title="NEVER TAKE PROFITS" text="Watch your $50 become $5,000, then ride it back to $0. Diamond hands means holding through bankruptcy." />
            <CommandmentCard number="III" title="USE 100X LEVERAGE" text="Why lose money slowly over years when you can lose it all in 3 seconds? Efficiency is key." />
            <CommandmentCard number="IV" title="TRUST THE ANIME GIRL" text="If the founder has a cute PFP and uses the word 'fren', trust them with your life savings." />
            <CommandmentCard number="V" title="CLICK EVERY LINK" text="Security is for cowards. If it says 'Claim Airdrop', connect your wallet immediately." />
            <CommandmentCard number="VI" title="DO ZERO RESEARCH" text="Just look at the chart, the memes, and the Telegram count. Due diligence is just cope." />
            <CommandmentCard number="VII" title="PANIC SELL BOTTOM" text="Buy when you feel like a god. Sell when you're crying in the shower." />
            <CommandmentCard number="VIII" title="MARRY YOUR BAGS" text="Emotional attachment is key. Never let go, even when the dev deletes Twitter." />
            <CommandmentCard number="IX" title="IGNORE GAS FEES" text="Pay $80 in ETH fees to swap $15 worth of a shitcoin. Assert dominance." />
            <CommandmentCard number="X" title="ENVY THY NEIGHBOR" text="Stare at other people's gains on Twitter until you feel physically ill. Then revenge-trade." />
        </div>
      </Section>

      {/* TOKENOMICS */}
      <Section className="max-w-5xl mx-auto w-full">
         <div className="border-2 border-hell-red/50 bg-black/40 p-8 md:p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-hell-flame to-transparent" />
            
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-center text-white mb-2">THE DEVIL'S MATH</h2>
            <p className="text-center text-gray-400 mb-12">The Numbers Don't Lie. (But You'll Ignore Them Anyway.)</p>

            <div className="grid md:grid-cols-2 gap-8 2k:gap-16">
                <div className="flex flex-col items-center justify-center p-6 bg-hell-charcoal/30 rounded-lg">
                    <Flame size={48} className="text-hell-orange mb-4" />
                    <h3 className="text-2xl font-bold text-white">SUPPLY</h3>
                    <p className="text-4xl font-mono text-hell-red mt-2">666,666,666</p>
                    <p className="text-sm text-gray-500 mt-2">The number of the beast. Subtlety is dead.</p>
                </div>
                <div className="flex flex-col items-center justify-center p-6 bg-hell-charcoal/30 rounded-lg">
                    <Skull size={48} className="text-hell-orange mb-4" />
                    <h3 className="text-2xl font-bold text-white">TAX</h3>
                    <p className="text-4xl font-mono text-hell-red mt-2">0/0%</p>
                    <p className="text-sm text-gray-500 mt-2">No tax. We're already in hell.</p>
                </div>
            </div>

            <div className="mt-12 text-center">
                 <p className="text-xl text-gray-300">LIQUIDITY: <span className="text-hell-flame font-bold">BURNED</span> (Like your last three portfolios)</p>
                 <p className="text-xl text-gray-300 mt-2">TEAM TOKENS: <span className="text-hell-flame font-bold">0%</span> (Just you, the market, and your terrible decisions)</p>
            </div>
         </div>
      </Section>

      {/* RITUAL */}
      <Section className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-center text-hell-orange mb-12">THE SUMMONING RITUAL</h2>
        
        <div className="space-y-8">
            {[
                { step: 1, title: "PREPARE THE VESSEL", desc: "Download Phantom/Metamask. Write down your seed phrase. Lose it immediately." },
                { step: 2, title: "GATHER THE OFFERING", desc: "Acquire SOL/ETH. The gas fees alone will cost more than your future bag." },
                { step: 3, title: "ENTER THE ALTAR", desc: "Go to Raydium/Uniswap. Set slippage to 'fuck it' (5-10%)." },
                { step: 4, title: "ACCEPT YOUR FATE", desc: "Swap your boring coins for eternal glory (or eternal regret)." }
            ].map((s) => (
                <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    key={s.step} 
                    className="flex items-center gap-6 p-4 border-b border-hell-red/20 hover:bg-hell-red/5 transition-colors"
                >
                    <div className="text-6xl font-black text-hell-dark text-stroke-hell">{s.step}</div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">{s.title}</h3>
                        <p className="text-gray-400">{s.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </Section>

       {/* HALL OF PAIN */}
       <Section className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-white mb-4">HALL OF PAIN</h2>
            <p className="text-center text-gray-500 mb-12">Real Stories From Real People Who Definitely Learned Their Lesson</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { name: "Sinner #420", pnl: "-99%", quote: "I trusted a YouTuber with his mouth open in the thumbnail. I now live with my parents." },
                    { name: "BagHolder_666", pnl: "Divorced", quote: "My wife thinks we're saving for a house. I am 50x leveraged long on 'ElonSperm'." },
                    { name: "Wagie_007", pnl: "-$12,000", quote: "I panic-sold the bottom. It immediately pumped 80%. I have the inverse Midas touch." },
                ].map((t, i) => (
                    <div key={i} className="bg-hell-charcoal p-6 rounded border border-gray-800">
                        <div className="flex justify-between items-start mb-4">
                            <h4 className="font-bold text-hell-orange">{t.name}</h4>
                            <span className="text-xs bg-red-900 text-red-200 px-2 py-1 rounded">PNL: {t.pnl}</span>
                        </div>
                        <p className="text-gray-300 italic">"{t.quote}"</p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8 text-hell-flame font-bold animate-pulse">
                Join them. (You will anyway).
            </div>
       </Section>

      {/* HELLMAP */}
      <Section className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-center text-hell-orange mb-16">THE HELLMAP</h2>
        
        <div className="space-y-12">
            <RoadmapItem 
                phase="PHASE 666" 
                title="THE LAUNCH" 
                status="COMPLETE (We're in Hell now)"
                items={["Contract deployed at 3:33 AM", "First 666 holders blessed with suffering", "Liquidity burned as offering"]} 
            />
            <RoadmapItem 
                phase="PHASE 1337" 
                title="DELUSIONAL HODLING" 
                status="IN PROGRESS (Going poorly)"
                items={["Hit $666k MC (lasted 12 seconds)", "Partnership with therapy apps", "Twitter Spaces with dead projects"]} 
            />
             <RoadmapItem 
                phase="PHASE 9999" 
                title="PEAK DELUSION" 
                status="UNLIKELY"
                items={["Billboard in Times Square", "Metaverse Hell (VR suffering)", "Partnership with bankruptcy lawyers"]} 
            />
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-black py-20 px-6 border-t border-hell-red/20 text-center relative z-20">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">HELLCOIN</h2>
            <div className="flex flex-col items-center gap-6 mb-12">
                <p className="text-gray-500 max-w-lg">
                    DISCLAIMER: This is a memecoin. It has no intrinsic value. It might go to zero. 
                    If you need financial advice, consult a professional. If you need spiritual advice, consult a priest. 
                    If you came here for either, you're already lost.
                </p>
                <div className="flex gap-4">
                    <button className="text-hell-orange hover:text-white transition-colors">Twitter</button>
                    <button className="text-hell-orange hover:text-white transition-colors">Telegram</button>
                    <button className="text-hell-orange hover:text-white transition-colors">Discord</button>
                </div>
            </div>
            
            <div className="p-4 bg-hell-charcoal/50 rounded-lg inline-flex items-center gap-4 max-w-full overflow-hidden">
                <code className="text-hell-flame truncate">{contractAddress}</code>
                <button 
                    onClick={copyToClipboard}
                    className="text-xs bg-hell-red hover:bg-white hover:text-hell-red px-3 py-1 rounded transition-colors"
                >
                    {copied ? "COPIED" : "COPY"}
                </button>
            </div>

            <p className="text-gray-700 mt-12 text-sm">
                © 2025 HELLCOIN. All rights reserved. All money probably lost.
            </p>
        </div>
      </footer>
    </main>
  );
}