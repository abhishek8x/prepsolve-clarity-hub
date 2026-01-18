export function FounderSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
            Behind PrepSolve
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built by Someone Who Understands
          </h2>
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar placeholder */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-display font-bold text-primary">PS</span>
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                The PrepSolve Team
              </h3>
              <p className="text-primary text-sm mb-4">Educators & Students</p>
              <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                "We built PrepSolve because we saw too many students drowning in content 
                without direction. Exam preparation shouldn't be about studying everything — 
                it should be about studying the right things, in the right way. 
                That's what we're here to provide."
              </blockquote>
              <p className="text-sm text-muted-foreground">
                PrepSolve combines years of teaching experience with practical understanding 
                of what students actually need to succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}