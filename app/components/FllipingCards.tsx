'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from './ui/LegacyButton';

export default function FlippingCards() {
  const [flipped, setFlipped] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    if (flipped.includes(index)) {
      setFlipped(flipped.filter((i) => i !== index));
    } else {
      setFlipped([...flipped, index]);
    }
  };

  const cards = [
    {
      user: 'John',
      time: '2:14 PM',
      frontContent:
        'our hiring process so on and on and we landed 4 really talented individuals just in 24 hours',
      backContent:
        "We've streamlined our interview process to be more efficient while maintaining high standards.",
      avatar: '/placeholder.svg?height=40&width=40',
      action: 'View details',
    },
    {
      user: 'Tejas',
      time: '1:14 PM',
      frontContent: "Our Command K menu doesn't trigger when I'm focused on a text field.",
      backContent:
        "This is a known issue with keyboard shortcuts in text fields. We're working on a fix.",
      avatar: '/placeholder.svg?height=40&width=40',
      action: 'Create issue on Linear',
    },
    {
      user: 'Sarah',
      time: '11:32 AM',
      frontContent: 'Just deployed the new feature to production. All tests are passing!',
      backContent:
        'The deployment included 5 bug fixes and 2 new features that were requested by users.',
      avatar: '/placeholder.svg?height=40&width=40',
      action: 'View deployment',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="w-full max-w-3xl space-y-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="perspective-1000 relative h-[180px] w-full"
            onClick={() => toggleFlip(index)}
          >
            <motion.div
              className="preserve-3d relative h-full w-full cursor-pointer"
              animate={{ rotateY: flipped.includes(index) ? 180 : 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              {/* Front of card */}
              <div className="absolute h-full w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 shadow-lg backface-hidden">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10 border border-zinc-700">
                    <AvatarImage src={card.avatar || '/placeholder.svg'} alt={card.user} />
                    <AvatarFallback className="bg-zinc-800 text-zinc-400">
                      {card.user.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-white">{card.user}</span>
                      <span className="text-sm text-zinc-500">{card.time}</span>
                    </div>
                    <p className="mt-1 text-zinc-300">{card.frontContent}</p>
                  </div>
                </div>
                <div className="absolute right-4 bottom-4">
                  <Button
                    variant="outline"
                    className="border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
                  >
                    {card.action}
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 text-xs text-zinc-500">Click to flip</div>
              </div>

              {/* Back of card */}
              <div className="absolute h-full w-full rotate-y-180 rounded-xl border border-zinc-700 bg-zinc-800 p-4 shadow-lg backface-hidden">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <h3 className="mb-2 text-lg font-medium text-white">Additional Information</h3>
                    <p className="text-zinc-300">{card.backContent}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-500">
                      From {card.user} • {card.time}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-600 bg-zinc-700 text-white hover:bg-zinc-600"
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
  );
}
