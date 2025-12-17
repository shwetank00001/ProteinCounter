import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"

const HeroSection = () => {
  return (
    <section className="bg-amber-100">
        <div className="flex flex-col px-5 items-center justify-center">
            <Badge variant="outline">Your gym directory here  </Badge>
                <h1>Welcome to Shwetank's gym arena.</h1>
                <p>You can track your gym exercises and protein goal here.</p>
            <Button>Your everyday split</Button>
        </div>
    </section>
  )
}

export default HeroSection