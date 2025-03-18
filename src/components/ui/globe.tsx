import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export function Globe({
  className,
}: {
  className?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestRef = useRef<number>(0)
  
  useEffect(() => {
    if (!canvasRef.current) return
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas size based on container
    const handleResize = () => {
      if (!canvasRef.current) return
      const container = canvasRef.current.parentElement
      if (!container) return
      
      const size = Math.min(container.clientWidth, container.clientHeight)
      canvas.width = size
      canvas.height = size
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    
    // Animation variables
    let rotation = 0
    const rotationSpeed = 0.003 // decrease rotation speed
    const globeRadius = canvas.width * 0.35
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    
    // Create markers for the globe
    const markers = [
      { lat: 40.7128, lng: -74.006 }, // New York
      { lat: 51.5074, lng: -0.1278 }, // London
      { lat: 35.6762, lng: 139.6503 }, // Tokyo
      { lat: 37.7749, lng: -122.4194 }, // San Francisco
      { lat: -33.8688, lng: 151.2093 }, // Sydney
      { lat: 19.4326, lng: -99.1332 }, // Mexico City
      { lat: -23.5505, lng: -46.6333 }, // São Paulo
      { lat: 48.8566, lng: 2.3522 }, // Paris
      { lat: 55.7558, lng: 37.6173 }, // Moscow
      { lat: 1.3521, lng: 103.8198 }, // Singapore
    ]
    
    // Convert lat/lng to 3D coordinates
    const to3d = (lat: number, lng: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180)
      const theta = (lng + 180) * (Math.PI / 180)
      
      const x = -radius * Math.sin(phi) * Math.cos(theta)
      const z = radius * Math.sin(phi) * Math.sin(theta)
      const y = radius * Math.cos(phi)
      
      return { x, y, z }
    }
    
    // Animation loop - continuous rotation
    const animate = () => {
      if (!canvasRef.current || !ctx) return
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Rotate slowly but steadily
      rotation += rotationSpeed
      if (rotation > Math.PI * 2) rotation -= Math.PI * 2
      
      // Draw globe
      ctx.beginPath()
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2)
      ctx.fillStyle = '#121212'
      ctx.fill()
      
      // Draw grid lines - simplified for stability
      const numLines = 10
      
      // Longitude lines
      for (let i = 0; i < numLines; i++) {
        const angle = (i / numLines) * Math.PI * 2
        
        ctx.beginPath()
        for (let j = 0; j <= 180; j += 5) {
          const phi = (j * Math.PI) / 180
          const radius = Math.sin(phi) * globeRadius
          const y = centerY + Math.cos(phi) * globeRadius * Math.cos(angle + rotation)
          const x = centerX + radius * Math.sin(angle + rotation)
          
          if (j === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)'
        ctx.stroke()
      }
      
      // Latitude lines
      for (let i = 1; i < 6; i++) {
        const phi = (i * 30 * Math.PI) / 180
        const radius = Math.sin(phi) * globeRadius
        
        ctx.beginPath()
        ctx.ellipse(centerX, centerY, radius, radius * Math.cos(rotation), 0, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)'
        ctx.stroke()
      }
      
      // Draw markers
      markers.forEach(marker => {
        const pos = to3d(marker.lat, marker.lng, globeRadius)
        
        // Adjust for rotation
        const rotatedX = pos.x * Math.cos(rotation) - pos.z * Math.sin(rotation)
        const rotatedZ = pos.x * Math.sin(rotation) + pos.z * Math.cos(rotation)
        
        // Only draw if visible (front half of the globe)
        if (rotatedZ < 0) {
          const projectedX = centerX + rotatedX
          const projectedY = centerY + pos.y
          
          // Draw marker
          ctx.beginPath()
          ctx.arc(projectedX, projectedY, 3, 0, Math.PI * 2)
          ctx.fillStyle = '#FB6415'
          ctx.fill()
        }
      })
      
      // Schedule next frame
      requestRef.current = requestAnimationFrame(animate)
    }
    
    // Start the animation immediately and make canvas visible
    animate()
    if (canvasRef.current) {
      canvasRef.current.style.opacity = '1'
    }
    
    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(requestRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  return (
    <div className={cn("relative w-full h-full", className)}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  )
}
