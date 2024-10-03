'use client'

import { useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  ChevronRight,
  Code,
  Cpu,
  Globe,
  Calendar,
  Clock,
  MapPin,
  User
} from 'lucide-react'
import { motion } from 'framer-motion'
// If using Next.js and want to use the Image component
// import Image from 'next/image'

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const particles: { x: number; y: number; dx: number; dy: number }[] = []
    const particleCount = 100
    const maxDistance = 100
    const mouseMoveRadius = 50

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 1,
          dy: (Math.random() - 0.5) * 1
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        // Move particles
        particle.x += particle.dx
        particle.y += particle.dy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseMoveRadius) {
          particle.x += dx * 0.01
          particle.y += dy * 0.01
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(57, 126, 192, 0.5)'
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x
          const dy = particles[j].y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(57, 126, 192, ${
              1 - distance / maxDistance
            })`
            ctx.stroke()
          }
        }
      })

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY }
    }

    resizeCanvas()
    createParticles()
    drawParticles()

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}

export function LandingPage() {
  // Placeholder execs array with 9 entries
  const execs = [
    {
      name: 'Peter Shao',
      position: 'President',
      imageUrl: '/images/peter_shao.jpeg'
    },

    {
      name: 'Aiden Pinto',
      position: 'President',
      imageUrl: '/images/aiden_pinto.jpeg'
    },

    {
      name: 'Cyrus Chang',
      position: 'Lead Exec',
      imageUrl: '/images/cyrus_chang.jpg'
    },

    {
      name: 'Joshua Zhang',
      position: 'Lecturer',
      imageUrl: '/images/joshua_zhang.jpeg'

    },

    {
      name: 'Ali Naqvi',
      position: 'Lecturer',
      imageUrl: '/images/ali_naqvi.jpg'
      
    },

    {
      name: 'Carlos Niu',
      position: 'Marketing',
      imageUrl: '/images/carlos_niu.jpg'
      
    },
    
    {
      name: 'Humza Hasan',
      position: 'Marketing',
      imageUrl: '/images/humza_hasan.jpg'
      
    },

    {
      name: 'Sebastian Barsan',
      position: 'Logistics',
      imageUrl: '/images/sebastian_barsan.jpg'
      
    },

    {
      name: 'Mythili Panicker ',
      position: 'Logistics',
      imageUrl: '/images/mythili_panicker.jpg'
      
    },
  ]
  

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <div className="relative z-20 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#397ec0] to-[#45a998] animate-gradient-x glow-text"
          >
            IRHS AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl mb-8"
          >
            Teaching YOU to use AI efficiently, effectively and ethically.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
<a href="https://discord.gg/umWMEzjUbx" target="_blank" rel="noopener noreferrer">
  <Button className="bg-[#7289DA] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#5b6eae] transition duration-300">
    Join Discord
  </Button>
</a>

<a href="https://classroom.google.com/c/NzA1ODUyNzc3MDQy?cjc=kq2ipvk" target="_blank" rel="noopener noreferrer">
  <Button className="bg-[#4285F4] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#3367D6] transition duration-300">
    Join Google Classroom
  </Button>
</a>

          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Empowering Young Minds in Tech
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Code className="w-10 h-10 text-[#397ec0]" />}
              title="Interactive Workshops"
              description="Learn about cutting-edge AI tools in a hands-on environment."
              delay={0}
            />
            <FeatureCard
              icon={<Cpu className="w-10 h-10 text-[#45a998]" />}
              title="Custom-Built Projects"
              description="Make AI useful in your professional, academic, and personal life through real-world projects."
              delay={0.2}
            />
            <FeatureCard
              icon={<Globe className="w-10 h-10 text-[#397ec0]" />}
              title="Influential Guest Speakers"
              description="Engage with industry experts in various fields including healthcare and government."
              delay={0.4}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* News Section */}
      <AnimatedSection className="bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Latest News
          </h2>
          <div className="space-y-8">
            <TimelineItem
              date="October 3rd, 2024"
              title="Supercharging your English Projects"
              description="In collaboration with the English Department, we have developed a custom English grader based on real IRHS rubrics. Come on in to use it and learn how it works!"
              delay={0.2}
            />
            <TimelineItem
              date="October 17th, 2024"
              title="Oakville MPP Stephen Crawford"
              description="Join us for a speech from Oakville's Member of Provincial Parliament (MPP) Stephen Crawford on the use of AI technology in government."
              delay={0}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Meeting Plans and Execs Section */}
      <AnimatedSection className="bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Meetings
          </h2>
          <p className="text-xl mb-12">
            We meet every Thursday at lunch in Room 224
          </p>
          <div className="flex flex-col md:flex-row items-start justify-center gap-8">
            {/* Meeting Details */}
            <div className="bg-gradient-to-r from-[#397ec0] to-[#45a998] p-1 rounded-lg inline-block w-full md:w-1/2">
              <div className="bg-gray-700 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">
                  Meeting Details
                </h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-center">
                    <Calendar className="w-6 h-6 text-[#45a998] mr-4" />
                    <span>
                      <strong>Day:</strong> Every Thursday
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-6 h-6 text-[#45a998] mr-4" />
                    <span>
                      <strong>Time:</strong> Lunch (11:10am - 12:10pm)
                    </span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="w-6 h-6 text-[#45a998] mr-4" />
                    <span>
                      <strong>Location:</strong> Room 224
                    </span>
                  </li>
                </ul>
                {/* Lesson Info Section */}
                <div className="mt-8">
                  <h3 className="text-2xl font-semibold mb-4">Lesson Info</h3>
                  <p className="text-gray-300">
                  In today's lesson we covered the how LLMs works through understanding tokens. Futhermore, we also went over good prompting habits and how to prompt engineer. We also released our first project Avalanche a advanced writing assistant based on real data and feedback from teachers. Access it on <a href="https://chat.brainrot.best" target="_blank" rel="noopener noreferrer" className="text-[#397ec0] hover:underline">https://chat.brainrot.best</a> today! 
                  </p>
                </div>
              </div>
            </div>

            {/* Execs Section */}
            <div className="bg-gradient-to-r from-[#45a998] to-[#397ec0] p-1 rounded-lg inline-block w-full md:w-1/2">
              <div className="bg-gray-700 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">Our Team</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {execs.map((exec, index) => (
                    <div key={index} className="text-center">
                      <div className="w-24 h-24 mx-auto mb-2">
                        {/* Placeholder Image */}

                        {/* If you have images, replace the above div with: */}
                        {<img
                          src={exec.imageUrl}
                          alt={exec.name}
                          className="w-24 h-24 rounded-full object-cover"
                        /> }
                      </div>
                      <p className="font-semibold">{exec.name}</p>
                      <p className="text-sm text-gray-400">{exec.position}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

function AnimatedSection({
  children,
  className = ''
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`py-20 px-4 md:px-8 ${className}`}
    >
      {children}
    </motion.section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  delay
}: {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition duration-300"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

function TimelineItem({
  date,
  title,
  description,
  delay
}: {
  date: string
  title: string
  description: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className="flex"
    >
      <div className="flex flex-col items-center mr-4">
        <div className="w-3 h-3 bg-[#45a998] rounded-full"></div>
        <div className="w-0.5 h-full bg-[#45a998]"></div>
      </div>
      <div className="pb-8">
        <p className="text-sm text-[#397ec0] mb-1">{date}</p>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  )
}
