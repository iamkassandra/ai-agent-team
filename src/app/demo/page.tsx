'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  Play,
  Brain,
  Code,
  TestTube,
  Zap,
  Users,
  MessageSquare,
  Activity,
  Database,
  CheckCircle,
  Clock,
  Target,
  Lightbulb,
  Rocket,
  Cog
} from 'lucide-react';

// Mock AgentManager for demo
class DemoAgentManager {
  private isRunning = false;
  private currentPhase = 0;
  private phases = [
    'Strategic Analysis',
    'Technical Architecture',
    'Design System',
    'Legal Compliance',
    'Marketing Strategy',
    'Infrastructure Setup',
    'Quality Assurance'
  ];

  async startAutonomousDevelopment(businessIdea: string): Promise<any> {
    this.isRunning = true;
    this.currentPhase = 0;

    return new Promise((resolve) => {
      const interval = setInterval(() => {
        this.currentPhase++;

        if (this.currentPhase >= this.phases.length) {
          clearInterval(interval);
          this.isRunning = false;
          resolve({
            projectId: 'demo-project-001',
            businessIdea,
            phases: this.phases.map(phase => `${phase} ✅`),
            systemStats: {
              totalMemoryEntries: 247,
              knowledgeGraphNodes: 89,
              codeExecutions: 23,
              testSuccess: 94
            },
            agentsInvolved: [
              'executive-001',
              'engineer-001',
              'designer-001',
              'legal-001',
              'marketing-001',
              'devops-001',
              'testing-001'
            ],
            status: 'completed',
            completedAt: new Date()
          });
        }
      }, 2000);
    });
  }

  getCurrentPhase(): string {
    return this.phases[this.currentPhase] || 'Completed';
  }

  getProgress(): number {
    return Math.min((this.currentPhase / this.phases.length) * 100, 100);
  }

  isCurrentlyRunning(): boolean {
    return this.isRunning;
  }
}

const demoAgentManager = new DemoAgentManager();

export default function AutonomousDemo() {
  const [businessIdea, setBusinessIdea] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState('');
  const [completedProject, setCompletedProject] = useState<any>(null);
  const [realTimeEvents, setRealTimeEvents] = useState<any[]>([]);
  const [agentActivities, setAgentActivities] = useState<any[]>([]);
  const [systemStats, setSystemStats] = useState({
    vectorEntries: 247,
    knowledgeGraphNodes: 89,
    codeExecutions: 23,
    testSuccess: 94,
    activeAgents: 7,
    realtimeClients: 3
  });

  const eventLogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate real-time events
    const interval = setInterval(() => {
      if (isRunning) {
        const events = [
          { type: 'knowledge_transfer', agent: 'Executive → Engineer', message: 'Sharing business strategy' },
          { type: 'code_execution', agent: 'Engineer', message: 'Testing API endpoint implementation' },
          { type: 'design_update', agent: 'Designer', message: 'Creating component library' },
          { type: 'legal_review', agent: 'Legal', message: 'Reviewing compliance requirements' },
          { type: 'marketing_analysis', agent: 'Marketing', message: 'Analyzing target audience' },
          { type: 'infrastructure', agent: 'DevOps', message: 'Setting up CI/CD pipeline' },
          { type: 'quality_check', agent: 'Testing', message: 'Running automated test suite' }
        ];

        const randomEvent = events[Math.floor(Math.random() * events.length)];
        setRealTimeEvents(prev => [
          {
            ...randomEvent,
            timestamp: new Date(),
            id: Date.now()
          },
          ...prev.slice(0, 19)
        ]);

        setProgress(demoAgentManager.getProgress());
        setCurrentPhase(demoAgentManager.getCurrentPhase());
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    // Scroll to bottom of event log
    if (eventLogRef.current) {
      eventLogRef.current.scrollTop = eventLogRef.current.scrollHeight;
    }
  }, [realTimeEvents]);

  const startAutonomousDevelopment = async () => {
    if (!businessIdea.trim()) return;

    setIsRunning(true);
    setProgress(0);
    setCurrentPhase('Starting...');
    setCompletedProject(null);
    setRealTimeEvents([]);

    try {
      const result = await demoAgentManager.startAutonomousDevelopment(businessIdea);
      setCompletedProject(result);
      setIsRunning(false);
      setProgress(100);
      setCurrentPhase('Completed');
    } catch (error) {
      console.error('Demo error:', error);
      setIsRunning(false);
    }
  };

  const sampleIdeas = [
    'AI-powered fitness coaching platform with personalized workout plans',
    'Sustainable food delivery service using electric vehicles and reusable packaging',
    'Virtual reality educational platform for immersive language learning',
    'Blockchain-based supply chain transparency system for organic products',
    'IoT-enabled smart home energy management system'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white">
              <Rocket className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Autonomous Business Development
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch 7 AI agents collaborate in real-time to transform your business idea into a complete application
          </p>
        </div>

        {/* Input Section */}
        <Card className="border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              Business Idea Input
            </CardTitle>
            <CardDescription>
              Describe your business idea and watch our AI agents bring it to life
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Enter your business idea here..."
              value={businessIdea}
              onChange={(e) => setBusinessIdea(e.target.value)}
              className="min-h-[100px]"
              disabled={isRunning}
            />

            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-600">Sample ideas:</span>
              {sampleIdeas.map((idea, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="cursor-pointer hover:bg-blue-50"
                  onClick={() => !isRunning && setBusinessIdea(idea)}
                >
                  {idea.substring(0, 30)}...
                </Badge>
              ))}
            </div>

            <Button
              onClick={startAutonomousDevelopment}
              disabled={!businessIdea.trim() || isRunning}
              size="lg"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              {isRunning ? (
                <>
                  <Cog className="mr-2 h-4 w-4 animate-spin" />
                  Development in Progress...
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Start Autonomous Development
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Progress Section */}
        {(isRunning || completedProject) && (
          <Card className="border-2 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-green-500" />
                Development Progress
              </CardTitle>
              <CardDescription>
                Current phase: {currentPhase}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Progress value={progress} className="flex-1" />
                  <span className="text-sm font-medium">{Math.round(progress)}%</span>
                </div>

                {completedProject && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">🎉 Development Completed!</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Memory Entries:</span>
                        <p className="font-semibold">{completedProject.systemStats.totalMemoryEntries}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Knowledge Nodes:</span>
                        <p className="font-semibold">{completedProject.systemStats.knowledgeGraphNodes}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Code Executions:</span>
                        <p className="font-semibold">{completedProject.systemStats.codeExecutions}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Test Success:</span>
                        <p className="font-semibold">{completedProject.systemStats.testSuccess}%</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Main Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Real-time Events */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-blue-500" />
                  Real-time Agent Activity
                </CardTitle>
                <CardDescription>
                  Live feed of agent collaboration and knowledge sharing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] overflow-y-auto" ref={eventLogRef}>
                  <div className="space-y-3">
                    {realTimeEvents.map((event) => (
                      <div key={event.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="p-2 bg-blue-100 rounded-full">
                          {event.type === 'knowledge_transfer' && <Brain className="h-4 w-4 text-blue-600" />}
                          {event.type === 'code_execution' && <Code className="h-4 w-4 text-green-600" />}
                          {event.type === 'design_update' && <Zap className="h-4 w-4 text-purple-600" />}
                          {event.type === 'legal_review' && <CheckCircle className="h-4 w-4 text-red-600" />}
                          {event.type === 'marketing_analysis' && <Users className="h-4 w-4 text-orange-600" />}
                          {event.type === 'infrastructure' && <Database className="h-4 w-4 text-indigo-600" />}
                          {event.type === 'quality_check' && <TestTube className="h-4 w-4 text-emerald-600" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">{event.agent}</span>
                            <span className="text-xs text-gray-500">
                              {event.timestamp.toLocaleTimeString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{event.message}</p>
                        </div>
                      </div>
                    ))}

                    {realTimeEvents.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        <MessageSquare className="h-12 w-12 mx-auto mb-2 opacity-50" />
                        <p>Waiting for agent activity...</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* System Stats */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-purple-500" />
                  System Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-600 font-medium">Vector Memory</p>
                    <p className="text-2xl font-bold text-blue-800">{systemStats.vectorEntries}</p>
                    <p className="text-xs text-blue-600">Entries</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-600 font-medium">Knowledge Graph</p>
                    <p className="text-2xl font-bold text-green-800">{systemStats.knowledgeGraphNodes}</p>
                    <p className="text-xs text-green-600">Nodes</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-purple-600 font-medium">Code Executions</p>
                    <p className="text-2xl font-bold text-purple-800">{systemStats.codeExecutions}</p>
                    <p className="text-xs text-purple-600">Total</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-orange-600 font-medium">Test Success</p>
                    <p className="text-2xl font-bold text-orange-800">{systemStats.testSuccess}%</p>
                    <p className="text-xs text-orange-600">Rate</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Active Agents</span>
                    <span className="font-semibold">{systemStats.activeAgents}/7</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Real-time Clients</span>
                    <span className="font-semibold">{systemStats.realtimeClients}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-500" />
                  Agent Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'Executive', role: 'Strategy', status: 'active', color: 'blue' },
                    { name: 'Engineer', role: 'Development', status: 'active', color: 'green' },
                    { name: 'Designer', role: 'UI/UX', status: 'active', color: 'purple' },
                    { name: 'Legal', role: 'Compliance', status: 'active', color: 'red' },
                    { name: 'Marketing', role: 'Growth', status: 'active', color: 'orange' },
                    { name: 'DevOps', role: 'Infrastructure', status: 'active', color: 'indigo' },
                    { name: 'Testing', role: 'Quality', status: 'active', color: 'emerald' }
                  ].map((agent) => (
                    <div key={agent.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-${agent.color}-500`} />
                        <span className="font-medium text-sm">{agent.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {agent.role}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Advanced AI Capabilities</CardTitle>
            <CardDescription>
              Powered by cutting-edge AI technology for autonomous development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-2">
                <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold">Vector Memory</h4>
                <p className="text-sm text-gray-600">Semantic knowledge storage and cross-agent learning</p>
              </div>

              <div className="text-center space-y-2">
                <div className="p-4 bg-green-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Code className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold">Code Execution</h4>
                <p className="text-sm text-gray-600">Sandboxed environment for safe code testing</p>
              </div>

              <div className="text-center space-y-2">
                <div className="p-4 bg-purple-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold">Real-time Collaboration</h4>
                <p className="text-sm text-gray-600">Live agent communication and coordination</p>
              </div>

              <div className="text-center space-y-2">
                <div className="p-4 bg-orange-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <TestTube className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="font-semibold">Automated Testing</h4>
                <p className="text-sm text-gray-600">Comprehensive QA and performance monitoring</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
