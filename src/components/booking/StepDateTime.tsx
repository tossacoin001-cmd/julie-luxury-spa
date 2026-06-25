"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format, addDays, startOfToday, isBefore, isToday } from "date-fns";
import { TIME_SLOTS, getService } from "@/lib/services";
import { cn } from "@/lib/utils";
import type { ServiceId } from "@/types/booking";

interface Props {
  serviceId: ServiceId;
  selectedDate?: string;
  selectedTime?: string;
  onNext: (data: { date: string; time: string }) => void;
  onBack: () => void;
}

const UNAVAILABLE_SLOTS = ["11:00 AM", "3:00 PM"];

export function StepDateTime({
  serviceId,
  selectedDate,
  selectedTime,
  onNext,
  onBack,
}: Props) {
  const today = startOfToday();
  const [weekStart, setWeekStart] = useState(today);
  const [date, setDate] = useState(selectedDate ?? "");
  const [time, setTime] = useState(selectedTime ?? "");

  const service = getService(serviceId);

  const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  const canNext = date && time;

  return (
    <div className="p-6 sm:p-8">
      <h2
        className="text-2xl font-medium text-[var(--color-spa-green-dark)] mb-1"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        Pick a date & time
      </h2>
      {service && (
        <p className="text-sm text-[var(--color-spa-muted)] mb-6" style={{ fontFamily: "var(--font-inter)" }}>
          {service.name} · {service.duration} min
        </p>
      )}

      {/* Week nav */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => setWeekStart((d) => addDays(d, -7))}
          disabled={isBefore(addDays(weekStart, -1), today)}
          className="p-2 rounded-lg hover:bg-[var(--color-spa-cream)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={16} className="text-[var(--color-spa-muted)]" />
        </button>
        <span
          className="text-xs text-[var(--color-spa-muted)] tracking-wide"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {format(weekStart, "MMM yyyy")}
        </span>
        <button
          onClick={() => setWeekStart((d) => addDays(d, 7))}
          className="p-2 rounded-lg hover:bg-[var(--color-spa-cream)] transition-colors"
        >
          <ChevronRight size={16} className="text-[var(--color-spa-muted)]" />
        </button>
      </div>

      {/* Day picker */}
      <div className="grid grid-cols-7 gap-1.5 mb-6">
        {days.map((day) => {
          const isPast = isBefore(day, today) && !isToday(day);
          const dateStr = format(day, "yyyy-MM-dd");
          const selected = date === dateStr;
          return (
            <button
              key={dateStr}
              onClick={() => !isPast && setDate(dateStr)}
              disabled={isPast}
              className={cn(
                "flex flex-col items-center gap-1 py-2 px-1 rounded-xl text-xs transition-all",
                isPast && "opacity-30 cursor-not-allowed",
                selected &&
                  "bg-[var(--color-spa-green)] text-white",
                !selected &&
                  !isPast &&
                  "hover:bg-[var(--color-spa-cream-dark)] text-[var(--color-spa-charcoal)]",
                isToday(day) && !selected && "ring-1 ring-[var(--color-spa-green)]"
              )}
            >
              <span
                className={cn(
                  "text-[10px] uppercase tracking-wide",
                  selected ? "text-white/70" : "text-[var(--color-spa-muted)]"
                )}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {format(day, "EEE")}
              </span>
              <span
                className="font-medium text-sm"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {format(day, "d")}
              </span>
            </button>
          );
        })}
      </div>

      {/* Time slots */}
      {date && (
        <>
          <p
            className="text-xs tracking-wide text-[var(--color-spa-muted)] mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Available times on {format(new Date(date), "EEEE, MMMM d")}
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-6">
            {TIME_SLOTS.map((slot) => {
              const unavailable = UNAVAILABLE_SLOTS.includes(slot);
              const selected = time === slot;
              return (
                <button
                  key={slot}
                  onClick={() => !unavailable && setTime(slot)}
                  disabled={unavailable}
                  className={cn(
                    "py-2 px-2 rounded-lg text-xs font-medium transition-all border",
                    unavailable &&
                      "opacity-40 cursor-not-allowed bg-[var(--color-spa-stone)] border-transparent text-[var(--color-spa-muted)] line-through",
                    selected &&
                      "bg-[var(--color-spa-green)] border-[var(--color-spa-green)] text-white",
                    !selected &&
                      !unavailable &&
                      "border-[var(--color-spa-stone)] text-[var(--color-spa-charcoal)] hover:border-[var(--color-spa-green)] hover:text-[var(--color-spa-green)]"
                  )}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </>
      )}

      {/* Nav */}
      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 py-3 border border-[var(--color-spa-stone)] text-[var(--color-spa-charcoal)] text-sm rounded-full hover:bg-[var(--color-spa-cream-dark)] transition-colors"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Back
        </button>
        <button
          onClick={() => canNext && onNext({ date, time })}
          disabled={!canNext}
          className="flex-2 flex-1 py-3 bg-[var(--color-spa-green)] text-white text-sm rounded-full hover:bg-[var(--color-spa-green-dark)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed font-medium"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
