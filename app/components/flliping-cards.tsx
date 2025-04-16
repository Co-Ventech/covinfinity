"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/Button"

export default function FlippingCards() {
  const [flipped, setFlipped] = useState<number[]>([])

  const toggleFlip = (index: number) => {
    if (flipped.includes(index)) {
      setFlipped(flipped.filter((i) => i !== index))
    } else {
      setFlipped([...flipped, index])
    }
  }

  const cards = [
    {
      user: "John",
      time: "2:14 PM",
      frontContent: "our hiring process so on and on and we landed 4 really talented individuals just in 24 hours",
      backContent: "We've streamlined our interview process to be more efficient while maintaining high standards.",
      avatar: "/placeholder.svg?height=40&width=40",
      action: "View details",
    },
    {
      user: "Tejas",
      time: "1:14 PM",
      frontContent: "Our Command K menu doesn't trigger when I'm focused on a text field.",
      backContent: "This is a known issue with keyboard shortcuts in text fields. We're working on a fix.",
      avatar: "/placeholder.svg?height=40&width=40",
      action: "Create issue on Linear",
    },
    {
      user: "Sarah",
      time: "11:32 AM",
      frontContent: "Just deployed the new feature to production. All tests are passing!",
      backContent: "The deployment included 5 bug fixes and 2 new features that were requested by users.",
      avatar: "/placeholder.svg?height=40&width=40",
      action: "View deployment",
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      <div className="max-w-3xl w-full space-y-6">
        {cards.map((card, index) => (
          <div key={index} className="relative w-full h-[180px] perspective-1000" onClick={() => toggleFlip(index)}>
            <motion.div
              className="w-full h-full relative preserve-3d cursor-pointer"
              animate={{ rotateY: flipped.includes(index) ? 180 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Front of card */}
              <div className="absolute w-full h-full backface-hidden rounded-xl bg-zinc-900 border border-zinc-800 p-4 shadow-lg">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10 border border-zinc-700">
                    <AvatarImage src={card.avatar || "/placeholder.svg"} alt={card.user} />
                    <AvatarFallback className="bg-zinc-800 text-zinc-400">{card.user.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-white">{card.user}</span>
                      <span className="text-sm text-zinc-500">{card.time}</span>
                    </div>
                    <p className="mt-1 text-zinc-300">{card.frontContent}</p>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Button variant="outline" className="bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700">
                    {card.action}
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 text-xs text-zinc-500">Click to flip</div>
              </div>

              {/* Back of card */}
              <div className="absolute w-full h-full backface-hidden rounded-xl bg-zinc-800 border border-zinc-700 p-4 shadow-lg rotate-y-180">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Additional Information</h3>
                    <p className="text-zinc-300">{card.backContent}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-zinc-500">
                      From {card.user} • {card.time}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-zinc-700 text-white border-zinc-600 hover:bg-zinc-600"
                    >
                      Back to message
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}