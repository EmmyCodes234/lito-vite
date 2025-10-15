"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface OnboardingModalProps {
  isOpen: boolean
  onClose: () => void
}

const onboardingSteps = [
  {
    title: "Smart Tab Completion",
    description:
      "Get AI-powered writing suggestions as you type. Simply start typing and press Tab when you see a suggestion appear.",
    visual: (
      <div className="relative w-full h-48 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-lg flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 space-y-2">
            <div className="h-3 bg-foreground/20 rounded w-full" />
            <div className="h-3 bg-foreground/20 rounded w-5/6" />
            <div className="h-3 bg-primary/60 rounded w-2/3 animate-pulse" />
            <div className="absolute bottom-12 right-12 bg-background border-2 border-primary px-3 py-1 rounded-md text-xs font-mono shadow-lg">
              Press Tab ↹
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "AI Writing Assistant",
    description:
      "Chat with your AI writing partner to help edit docs, get feedback, or ask for help with any part of your writing process.",
    visual: (
      <div className="relative w-full h-48 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-lg flex items-center justify-center overflow-hidden p-6">
        <div className="w-full space-y-3">
          <div className="flex justify-end">
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-xs max-w-[70%]">
              Can you help me improve this paragraph?
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-muted px-4 py-2 rounded-lg text-xs max-w-[70%]">
              I'd be happy to help! Let me suggest some improvements...
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-muted/50 px-4 py-2 rounded-lg text-xs max-w-[70%] animate-pulse">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-foreground/30 rounded-full" />
                <div className="w-1.5 h-1.5 bg-foreground/30 rounded-full" />
                <div className="w-1.5 h-1.5 bg-foreground/30 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Smart Block Editing",
    description:
      "AI Blocks react to your writing and generate content based on a prompt. Use them in the editor toolbar or in the / menu.",
    visual: (
      <div className="relative w-full h-48 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-lg flex items-center justify-center overflow-hidden p-6">
        <div className="w-full space-y-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="w-4 h-4 bg-primary/20 rounded flex items-center justify-center">✨</div>
            <span>AI Summary Block</span>
          </div>
          <div className="space-y-2 bg-background/50 p-4 rounded-lg border-2 border-primary/30">
            <div className="h-2 bg-foreground/20 rounded w-full animate-pulse" />
            <div className="h-2 bg-foreground/20 rounded w-4/5 animate-pulse" />
            <div className="h-2 bg-foreground/20 rounded w-3/4 animate-pulse" />
          </div>
          <div className="text-xs text-center text-muted-foreground">Generating summary...</div>
        </div>
      </div>
    ),
  },
]

export function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onClose()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <div className="space-y-6 py-6">
          {/* Visual */}
          <div className="px-6">{onboardingSteps[currentStep].visual}</div>

          {/* Content */}
          <div className="space-y-3 px-6">
            <h2 className="text-2xl font-semibold text-center">{onboardingSteps[currentStep].title}</h2>
            <p className="text-muted-foreground text-center leading-relaxed">
              {onboardingSteps[currentStep].description}
            </p>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2">
            {onboardingSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === currentStep ? "bg-primary w-6" : "bg-muted-foreground/30",
                )}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between px-6">
            <Button variant="ghost" onClick={handlePrevious} disabled={currentStep === 0}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <Button onClick={handleNext}>
              {currentStep === onboardingSteps.length - 1 ? (
                "Get Started"
              ) : (
                <>
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
