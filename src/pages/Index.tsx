import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Clock, Mail, Star, Truck, Shield, Package, Users } from "lucide-react";

import heroImage from "@/assets/hero-packaging.jpg";
import strappingImage from "@/assets/strapping-plastic.jpg";
import toolsImage from "@/assets/packing-tools.jpg";
import tapeImage from "@/assets/tape-rolls.jpg";
import thermocolImage from "@/assets/thermocol.jpg";
import foamImage from "@/assets/ep-foam.jpg";
import bubbleImage from "@/assets/bubble-sheet.jpg";
import cornerImage from "@/assets/foam-corner.jpg";
import clothImage from "@/assets/hasion-cloth.jpg";

const Index = () => {
  const products = [
    {
      name: "Strapping Plastic Sutli",
      image: strappingImage,
      description: "High-quality plastic strapping for secure packaging and bundling."
    },
    {
      name: "Packing Machine Tools",
      image: toolsImage,
      description: "Professional tools and equipment for efficient packaging operations."
    },
    {
      name: "Brown Tape, Cello Tape",
      image: tapeImage,
      description: "Adhesive tapes for sealing and securing packages effectively."
    },
    {
      name: "Thermocol",
      image: thermocolImage,
      description: "Lightweight foam material for insulation and protective packaging."
    },
    {
      name: "E.P. Foam Sheet",
      image: foamImage,
      description: "Expanded polystyrene sheets for cushioning and protection."
    },
    {
      name: "Air Bubble Sheet",
      image: bubbleImage,
      description: "Protective bubble wrap for fragile item shipping and storage."
    },
    {
      name: "Foam Corner, L.D. Roll",
      image: cornerImage,
      description: "Corner protectors and plastic rolls for comprehensive packaging."
    },
    {
      name: "Hasion Cloth & Industrial Materials",
      image: clothImage,
      description: "Specialized cloth and various industrial packing materials."
    }
  ];

  const features = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Fast Delivery in Jaipur",
      description: "Quick and reliable delivery service across Jaipur and other cities."
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Competitive Bulk Rates",
      description: "Best wholesale prices for bulk orders and regular customers."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Custom Packaging Options",
      description: "Tailored packaging solutions to meet your specific requirements."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "15+ Years of Industry Experience",
      description: "Trusted expertise in industrial and export packaging materials."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center hero-gradient"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge variant="outline" className="mb-6 border-white/30 text-white bg-white/10 backdrop-blur-sm">
            Your Reliable Partner in Packaging Solutions
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Shubham Agencies
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Industrial & Export Packing Material Supplier in Jaipur
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => window.open('tel:9829149536', '_self')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: 98291-49536
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Products
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gradient-primary">About Shubham Agencies</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With over 15 years of dedicated service in the packaging industry, Shubham Agencies has established itself as a trusted name in Jaipur for industrial and export packing materials. Under the leadership of <strong>Vinod Kumar Jain</strong>, we have built our reputation on quality products, competitive pricing, and reliable service.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to excellence and customer satisfaction has made us the preferred choice for businesses across various industries. We specialize in providing comprehensive packaging solutions that ensure your products reach their destination safely and securely.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient-primary">Our Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of industrial packaging materials for all your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl">
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg font-semibold mb-2 text-primary">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {product.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient-primary">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover what makes Shubham Agencies the preferred choice for packaging solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-6 group-hover:bg-accent-light transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient-primary">Contact Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with us for all your packaging material requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        House No. 1310, 1st Crossing<br />
                        Baba Harish Chandra Marg<br />
                        Chandpole Bazar, Jaipur
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:9829149536" className="text-muted-foreground hover:text-accent transition-colors">
                        98291-49536
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 9:00 AM - 7:00 PM<br />
                        Sunday: 10:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Google Maps Embed */}
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden h-64 shadow-md">
                  <iframe
                    src="https://maps.google.com/maps?q=House+No.+1310,+1st+Crossing,+Baba+Harish+Chandra+Marg,+Chandpole+Bazar,+Jaipur,+Rajasthan+302001&output=embed&z=16"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shubham Agencies - House No. 1310, 1st Crossing, Baba Harish Chandra Marg, Chandpole Bazar, Jaipur"
                  />
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=House+No.+1310,+1st+Crossing,+Baba+Harish+Chandra+Marg,+Chandpole+Bazar,+Jaipur,+Rajasthan+302001`, '_blank')}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you soon
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone</label>
                    <Input placeholder="Your Phone Number" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email (Optional)</label>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us about your packaging requirements..."
                    rows={4}
                  />
                </div>
                <Button variant="cta" size="lg" className="w-full">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Shubham Agencies</h3>
            <p className="text-primary-foreground/80 mb-6">
              Thank you for choosing us as your trusted packaging partner
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="text-sm">Quality Assured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm">Trusted Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-blue-400" />
                <span className="text-sm">Fast Delivery</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/60">
              © 2024 Shubham Agencies. All rights reserved. | Owner: Vinod Kumar Jain
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;