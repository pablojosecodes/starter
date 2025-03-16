"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

export default function Home() {
  const [progress, setProgress] = useState(13);
  const [sliderValue, setSliderValue] = useState([33]);

  const showToast = (type: string) => {
    switch (type) {
      case "default":
        toast("Notification", {
          description: "Your workspace has been updated",
        });
        break;
      case "success":
        toast.success("Success!", {
          description: "Your changes have been saved to the cloud",
        });
        break;
      case "error":
        toast.error("Error!", {
          description: "Connection lost. Retrying in 5 seconds",
        });
        break;
      case "info":
        toast.info("New Update", {
          description: "Version 2.4.1 is now available for download",
        });
        break;
      case "warning":
        toast.warning("Storage Warning", {
          description: "You're approaching your storage quota (85%)",
        });
        break;
      case "action":
        toast("Collaboration Request", {
          description: "Alex wants to join your workspace",
          action: {
            label: "Accept",
            onClick: () => toast.success("Alex added to workspace!"),
          },
        });
        break;
    }
  };

  const increaseProgress = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
    toast.success(`Project completion: ${Math.min(progress + 10, 100)}%`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">NEXUS</span>
            <Badge variant="outline" className="ml-2">
              BETA
            </Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Features
            </a>
            <a
              href="#solutions"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Solutions
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Workspace</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => showToast("default")}>
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => showToast("success")}>
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => showToast("error")}>
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="container px-4 py-10 md:px-6 md:py-12 lg:py-16">
        {/* Hero section */}
        <section className="flex flex-col items-center text-center space-y-6 pb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Streamline Your Workflow
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              The all-in-one platform that helps teams deliver better results,
              faster.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button onClick={() => showToast("action")}>Try For Free</Button>
            <Button variant="outline" onClick={() => showToast("info")}>
              Watch Demo
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Request a Demo</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Schedule Your Demo</DialogTitle>
                  <DialogDescription>
                    Fill out the form below and our team will contact you within
                    24 hours.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="John Doe"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="username"
                      defaultValue="john@company.com"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    type="submit"
                    onClick={() =>
                      toast.success("Demo requested successfully!")
                    }
                  >
                    Submit Request
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Tabs Section */}
        <section id="features" className="space-y-8 py-8">
          <div className="flex flex-col items-center space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">
              Powerful Features
            </h2>
            <p className="text-muted-foreground">
              Everything you need to manage your business
            </p>
          </div>

          <Tabs defaultValue="automation" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="automation">Automation</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
            </TabsList>
            <TabsContent value="automation" className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Workflow Builder</CardTitle>
                    <CardDescription>
                      Automate your repetitive tasks
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Notification</Label>
                      <Input
                        id="email"
                        placeholder="Recipient email"
                        type="email"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="notifications" />
                      <Label htmlFor="notifications">Send daily digest</Label>
                    </div>
                    <div className="space-y-2">
                      <Label>Trigger threshold</Label>
                      <Slider
                        value={sliderValue}
                        onValueChange={setSliderValue}
                        max={100}
                        step={1}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => showToast("success")}>
                      Save Workflow
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Integration Hub</CardTitle>
                    <CardDescription>
                      Connect your favorite tools
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 gap-4">
                    <Button>Slack</Button>
                    <Button variant="secondary">Google Drive</Button>
                    <Button variant="outline">Trello</Button>
                    <Button variant="ghost">GitHub</Button>
                    <Button variant="destructive">Disconnect</Button>
                    <Button variant="link">View All</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                    <CardDescription>Track your business KPIs</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Conversion Rates</AccordionTrigger>
                        <AccordionContent>
                          Your average conversion rate is 3.2%, which is 0.5%
                          higher than last month. Keep up the good work!
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>User Engagement</AccordionTrigger>
                        <AccordionContent>
                          Average session duration increased by 12% this week.
                          Users are spending more time exploring your products.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Insights</CardTitle>
                    <CardDescription>
                      Financial performance at a glance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col space-y-6">
                      <div className="flex flex-wrap gap-2">
                        <Badge>Q1 2023</Badge>
                        <Badge variant="secondary">Q2 2023</Badge>
                        <Badge variant="outline">Q3 2023</Badge>
                        <Badge variant="destructive">Forecast</Badge>
                      </div>

                      <div className="flex gap-4">
                        <Avatar>
                          <AvatarImage src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" />
                          <AvatarFallback>RP</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarImage src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" />
                          <AvatarFallback>MS</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarFallback>+3</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="collaboration" className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Status</CardTitle>
                    <CardDescription>
                      Track your ongoing projects
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label>Website Redesign</Label>
                        <span className="text-sm text-muted-foreground">
                          {progress}%
                        </span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                    <Button onClick={increaseProgress}>
                      Mark Milestone Complete
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Team Communication</CardTitle>
                    <CardDescription>
                      Stay connected with your team
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      onClick={() => showToast("default")}
                    >
                      Send Update
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => showToast("success")}
                    >
                      Share Files
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => showToast("error")}
                    >
                      Escalate Issue
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => showToast("warning")}
                    >
                      Set Reminder
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <Separator className="my-8" />

        {/* Showcase section */}
        <section id="solutions" className="space-y-8 py-8">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Badge className="mb-2">ENTERPRISE</Badge>
            <h2 className="text-3xl font-bold tracking-tighter">
              Smart Solutions for Modern Teams
            </h2>
            <p className="text-muted-foreground max-w-[700px]">
              Nexus brings AI-powered productivity tools to help your
              organization stay ahead in a rapidly changing business landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Predictive Analytics",
                description:
                  "Forecast trends with 94% accuracy using our proprietary AI engine",
                icon: "📊",
              },
              {
                title: "Secure Workspace",
                description:
                  "SOC 2 Type II certified with end-to-end encryption for your sensitive data",
                icon: "🔐",
              },
              {
                title: "Seamless Scaling",
                description:
                  "From startup to enterprise, our platform grows with your business",
                icon: "🚀",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-4xl mx-auto mb-2">{item.icon}</div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center">
          <div className="flex gap-4">
            <a href="#" className="text-sm underline underline-offset-4">
              Terms
            </a>
            <a href="#" className="text-sm underline underline-offset-4">
              Privacy
            </a>
            <a href="#" className="text-sm underline underline-offset-4">
              Contact
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2023 Nexus Technologies, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
