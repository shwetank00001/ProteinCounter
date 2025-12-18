import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
import Link from "next/link";
import { SparkleIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-amber-100">
        <div className="flex flex-col px-5 py-2 items-center justify-center">
            <Badge className="p-2 px-4 mb-6 border-black" variant="outline"><span className="animate-ping">⭕</span>Your gym directory here  </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-5xl mb-6">Track your everyday gym progress easily.</h1>
                <p className="text-lg sm:text-xl md:text-xl lg:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">A community where you can keep your splits in record. A community where you can keep your splits in record</p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16 ">
              <Button variant={"blue"} className="text-base" size="lg"><Link href={"/submit"}>🌟Add Today's split</Link></Button>
              <Button variant={"pink"} className="text-base" size="lg"><Link href={"/splits"}>Your everyday 💪🏼split</Link></Button>
            </div>
        </div>
    </section>
  )
}

export default HeroSection