
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Settings, LogOut, Plus, Edit, Star, MessageSquare, Bookmark, History } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import SkillCard, { Skill } from '@/components/SkillCard';

// Mock data for user skills
const userSkills: Skill[] = [
  {
    id: '101',
    title: 'JavaScript Programming & React Development',
    category: 'Programming',
    description: 'Expert JavaScript and React development services. I can help with web applications, component design, and optimization.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ownerName: 'Demo User',
    ownerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Remote',
    rating: 4.9,
    reviewCount: 24,
    duration: '10-40 hours',
    slug: 'javascript-programming-react-development'
  },
  {
    id: '102',
    title: 'UI/UX Design Consultation',
    category: 'Design',
    description: 'Comprehensive UI/UX design services including wireframing, prototyping, and user testing. Specializing in intuitive interfaces.',
    imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ownerName: 'Demo User',
    ownerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Remote',
    rating: 4.8,
    reviewCount: 18,
    duration: '5-20 hours',
    slug: 'ui-ux-design-consultation'
  }
];

// Mock data for saved skills
const savedSkills: Skill[] = [
  {
    id: '4',
    title: 'Professional Portrait Photography',
    category: 'Photography',
    description: 'High-quality portrait photography session including retouching and digital delivery.',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ownerName: 'Michael Johnson',
    ownerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'New York, NY',
    rating: 4.7,
    reviewCount: 52,
    duration: '2-3 hours',
    slug: 'professional-portrait-photography'
  },
  {
    id: '7',
    title: 'Spanish Language Lessons',
    category: 'Languages',
    description: 'Conversational Spanish lessons for beginners and intermediate learners. Flexible scheduling.',
    imageUrl: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ownerName: 'Carlos Mendez',
    ownerAvatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Remote',
    rating: 4.7,
    reviewCount: 31,
    duration: '1 hour per session',
    slug: 'spanish-language-lessons'
  }
];

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("skills");
  
  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You've been successfully logged out.",
    });
    navigate('/');
  };
  
  if (!user) {
    return (
      <div className="min-h-screen pt-20 pb-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">You need to be logged in</h1>
          <button
            onClick={() => navigate('/auth')}
            className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container">
        {/* Profile header */}
        <div className="bg-card rounded-xl border border-border overflow-hidden mb-8 animate-fade-in">
          <div className="h-40 bg-gradient-to-r from-primary/20 to-accent/20"></div>
          <div className="relative px-6 pb-6">
            <div className="absolute -top-16 left-6 ring-8 ring-card rounded-full">
              <img 
                src={user.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'} 
                alt={user.name} 
                className="w-32 h-32 rounded-full object-cover border-4 border-card"
              />
            </div>
            <div className="pt-20 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl font-bold mb-1">{user.name}</h1>
                <p className="text-muted-foreground">{user.email}</p>
              </div>
              <div className="flex space-x-3 mt-4 md:mt-0">
                <button className="flex items-center space-x-2 px-4 py-2 bg-secondary rounded-md border border-border hover:bg-secondary/70 transition-colors">
                  <Edit size={16} />
                  <span>Edit Profile</span>
                </button>
                <button 
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 bg-destructive/10 text-destructive rounded-md hover:bg-destructive/20 transition-colors"
                >
                  <LogOut size={16} />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Profile stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in animation-delay-100">
          <div className="bg-card p-4 rounded-xl border border-border flex items-center space-x-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Star size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-medium">4.8/5</h3>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
          </div>
          <div className="bg-card p-4 rounded-xl border border-border flex items-center space-x-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <MessageSquare size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-medium">42</h3>
              <p className="text-sm text-muted-foreground">Total Reviews</p>
            </div>
          </div>
          <div className="bg-card p-4 rounded-xl border border-border flex items-center space-x-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <User size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-medium">12</h3>
              <p className="text-sm text-muted-foreground">Skills Offered</p>
            </div>
          </div>
          <div className="bg-card p-4 rounded-xl border border-border flex items-center space-x-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <History size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-medium">28</h3>
              <p className="text-sm text-muted-foreground">Swaps Completed</p>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="animate-fade-in animation-delay-200">
          <TabsList className="mb-8">
            <TabsTrigger value="skills" className="flex items-center space-x-2">
              <User size={16} />
              <span>My Skills</span>
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex items-center space-x-2">
              <Bookmark size={16} />
              <span>Saved Skills</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center space-x-2">
              <History size={16} />
              <span>Swap History</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings size={16} />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="skills" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Listed Skills</h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                <Plus size={16} />
                <span>Add New Skill</span>
              </button>
            </div>
            
            {userSkills.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {userSkills.map((skill, index) => (
                  <SkillCard 
                    key={skill.id} 
                    skill={skill} 
                    className="opacity-0 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-card rounded-xl border border-border">
                <User size={48} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No skills listed yet</h3>
                <p className="text-muted-foreground mb-6">Start sharing your talents with the community</p>
                <button className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
                  Add Your First Skill
                </button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="saved" className="space-y-6">
            <h2 className="text-2xl font-bold">Saved Skills</h2>
            
            {savedSkills.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedSkills.map((skill, index) => (
                  <SkillCard 
                    key={skill.id} 
                    skill={skill} 
                    className="opacity-0 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-card rounded-xl border border-border">
                <Bookmark size={48} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No saved skills</h3>
                <p className="text-muted-foreground mb-6">Browse skills and save ones you're interested in</p>
                <button 
                  onClick={() => navigate('/browse')}
                  className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Browse Skills
                </button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="history" className="space-y-6">
            <h2 className="text-2xl font-bold">Swap History</h2>
            
            <div className="text-center py-16 bg-card rounded-xl border border-border">
              <History size={48} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">No swap history yet</h3>
              <p className="text-muted-foreground mb-6">Your completed skill swaps will appear here</p>
              <button 
                onClick={() => navigate('/browse')}
                className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Find Skills to Swap
              </button>
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold">Account Settings</h2>
            
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-xl font-medium mb-4">Personal Information</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <input 
                      type="text" 
                      defaultValue={user.name}
                      className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email Address</label>
                    <input 
                      type="email" 
                      defaultValue={user.email}
                      className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Bio</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell the community about yourself..."
                    className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-xl font-medium mb-4">Change Password</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Current Password</label>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">New Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Confirm New Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </div>
                
                <div className="pt-4">
                  <button className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors">
                    Update Password
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl border border-destructive/20 p-6">
              <h3 className="text-xl font-medium text-destructive mb-4">Danger Zone</h3>
              <p className="text-muted-foreground mb-4">Once you delete your account, there is no going back. Please be certain.</p>
              <button className="bg-destructive/10 text-destructive px-6 py-2 rounded-md font-medium hover:bg-destructive/20 transition-colors">
                Delete Account
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
