import { SparkleIcon,Dumbbell  } from "lucide-react";

const DynamicStats = () => {
    const stats = [
    {
      icon: Dumbbell, allTimeSplits: "2K", label: "Splits Recorded"
    },
    {
      icon: Dumbbell, allTimeSplits: "10K+", label: "Protein Saved"
    },
    {
      icon: Dumbbell, allTimeSplits: "2K", label: "Splits Recorded"
    },
  ]

  const ele = stats.map((item) => {
    return (
      <div >
        <div className="flex justify-center items-center gap-2">
          <Dumbbell className="size-15 text-primary/70" />
          <p className="text-3xl sm:text-4xl font-bold">{item.allTimeSplits}</p>
        </div>
        <div className="flex justify-center">
          <p className="text-sm text-muted-foreground ">{item.label}</p>
        </div>
      </div>
    )
  })
  return (
    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl items-center w-full"  >
      {ele}
    </div>
  )
}

export default DynamicStats