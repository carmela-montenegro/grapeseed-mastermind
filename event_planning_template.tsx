import React, { useState } from 'react';
import { Calendar, Users, Building2, Target, CheckCircle2, Clock, FileText, MessageSquare } from 'lucide-react';

const EventPlanningTemplate = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', name: 'Event Overview', icon: FileText },
    { id: 'venue', name: 'Venue Coordination', icon: Building2 },
    { id: 'guests', name: 'Guest Management', icon: Users },
    { id: 'partners', name: 'Partner Integration', icon: Target },
    { id: 'timeline', name: 'Timeline & Milestones', icon: Clock },
    { id: 'success', name: 'Success Metrics', icon: CheckCircle2 },
    { id: 'feedback', name: 'Post-Event Feedback', icon: MessageSquare }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">Event Planning Template</h1>
          </div>
          <p className="text-gray-600">Comprehensive project management framework for hosting successful events</p>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden">
          <div className="flex overflow-x-auto">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-6 py-4 whitespace-nowrap transition-colors ${
                    activeSection === section.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {section.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {activeSection === 'overview' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700">Event Name</label>
                  <input type="text" placeholder="Enter event name..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                </div>
                
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700">Event Type</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option>Lunch Event (2-3 hours)</option>
                    <option>Happy Hour (2-3 hours)</option>
                    <option>Conference/Summit (Full day)</option>
                    <option>Networking Mixer (1-2 hours)</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700">Target Date</label>
                  <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                </div>
                
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700">Preferred Day(s)</label>
                  <input type="text" placeholder="e.g., Tuesday-Thursday" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                </div>
                
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700">Expected Attendance</label>
                  <input type="text" placeholder="e.g., 15-30 people" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                </div>
                
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700">Budget Range</label>
                  <input type="text" placeholder="Enter budget..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Event Objective</label>
                <textarea rows="4" placeholder="What is the primary goal of this event? (networking, lead generation, brand awareness, etc.)" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Project Owner/Lead</label>
                <input type="text" placeholder="Name and contact info..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
              </div>
            </div>
          )}

          {activeSection === 'venue' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Venue Coordination</h2>
              
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 mb-6">
                <p className="text-sm font-semibold text-indigo-900">Primary Goal: Secure venue dates and finalize logistics</p>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Venue Name</label>
                <input type="text" placeholder="Enter venue name..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Venue Contact Person</label>
                <input type="text" placeholder="Name, title, email, phone..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-gray-900 mb-3">Task Checklist</h3>
                
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                    <div>
                      <span className="text-gray-900 font-medium">Initial contact made</span>
                      <p className="text-sm text-gray-600">Contact venue to discuss potential dates and availability</p>
                      <input type="date" placeholder="Date contacted" className="mt-2 p-2 text-sm border border-gray-300 rounded" />
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                    <div>
                      <span className="text-gray-900 font-medium">Date availability confirmed</span>
                      <p className="text-sm text-gray-600">Secure 2-3 potential dates that work for both venue and internal team</p>
                      <textarea rows="2" placeholder="Enter potential dates..." className="mt-2 w-full p-2 text-sm border border-gray-300 rounded"></textarea>
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                    <div>
                      <span className="text-gray-900 font-medium">Pricing confirmed</span>
                      <p className="text-sm text-gray-600">Get detailed pricing for expected attendance (food, beverages, service charges, tax)</p>
                      <textarea rows="2" placeholder="Enter pricing details..." className="mt-2 w-full p-2 text-sm border border-gray-300 rounded"></textarea>
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                    <div>
                      <span className="text-gray-900 font-medium">A/V and technical setup confirmed</span>
                      <p className="text-sm text-gray-600">Microphone, projector, screen, WiFi, speakers, etc.</p>
                      <textarea rows="2" placeholder="List A/V requirements..." className="mt-2 w-full p-2 text-sm border border-gray-300 rounded"></textarea>
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                    <div>
                      <span className="text-gray-900 font-medium">Private space confirmed</span>
                      <p className="text-sm text-gray-600">Ensure room provides appropriate privacy and atmosphere</p>
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                    <div>
                      <span className="text-gray-900 font-medium">Food & beverage menu finalized</span>
                      <p className="text-sm text-gray-600">Confirm menu options, dietary restrictions accommodations</p>
                      <textarea rows="2" placeholder="Menu details and dietary considerations..." className="mt-2 w-full p-2 text-sm border border-gray-300 rounded"></textarea>
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                    <div>
                      <span className="text-gray-900 font-medium">Payment method confirmed</span>
                      <p className="text-sm text-gray-600">Confirm credit card payment process (direct or through partner)</p>
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                    <div>
                      <span className="text-gray-900 font-medium">Contract signed</span>
                      <p className="text-sm text-gray-600">Review and execute venue contract</p>
                      <input type="date" placeholder="Date signed" className="mt-2 p-2 text-sm border border-gray-300 rounded" />
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                    <div>
                      <span className="text-gray-900 font-medium">Final confirmation (1 week prior)</span>
                      <p className="text-sm text-gray-600">Reconfirm final headcount, timing, and special requests</p>
                      <input type="date" placeholder="Confirmation date" className="mt-2 p-2 text-sm border border-gray-300 rounded" />
                    </div>
                  </label>
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Notes & Special Requests</label>
                <textarea rows="4" placeholder="Any additional venue requirements, accessibility needs, branding opportunities, etc." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
              </div>
            </div>
          )}

          {activeSection === 'guests' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Guest List Management</h2>
              
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 mb-6">
                <p className="text-sm font-semibold text-indigo-900">Primary Goal: Build and categorize guest list, manage invitations and RSVPs</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700">A-List (High Priority)</label>
                  <textarea rows="6" placeholder="List high-priority attendees (name, title, company, email)..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
                  <p className="text-sm text-gray-600">Send invitations to A-list first</p>
                </div>
                
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700">B-List (Secondary Priority)</label>
                  <textarea rows="6" placeholder="List secondary invites if capacity allows..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
                  <p className="text-sm text-gray-600">Invite B-list based on A-list response rate</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Internal Team Attendees</label>
                <textarea rows="3" placeholder="List internal staff who will attend (name, role)..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Partner Organization Representatives</label>
                <textarea rows="3" placeholder="List partner representatives attending..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-gray-900 mb-3">Outreach Timeline Checklist</h3>
                
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                    <div>
                      <span className="text-gray-900 font-medium">Save-the-Date sent (A-List)</span>
                      <p className="text-sm text-gray-600">Send preliminary date notice 4-6 weeks before event</p>
                      <input type="date" placeholder="Date sent" className="mt-2 p-2 text-sm border border-gray-300 rounded" />
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                    <div>
                      <span className="text-gray-900 font-medium">Formal invitation sent (A-List)</span>
                      <p className="text-sm text-gray-600">Send detailed invitation with RSVP link 3-4 weeks before</p>
                      <input type="date" placeholder="Date sent" className="mt-2 p-2 text-sm border border-gray-300 rounded" />
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                    <div>
                      <span className="text-gray-900 font-medium">B-List invitations sent (if needed)</span>
                      <p className="text-sm text-gray-600">Based on A-list response rate and venue capacity</p>
                      <input type="date" placeholder="Date sent" className="mt-2 p-2 text-sm border border-gray-300 rounded" />
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                    <div>
                      <span className="text-gray-900 font-medium">First reminder sent</span>
                      <p className="text-sm text-gray-600">Reminder to non-responders 2 weeks before event</p>
                      <input type="date" placeholder="Date sent" className="mt-2 p-2 text-sm border border-gray-300 rounded" />
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                    <div>
                      <span className="text-gray-900 font-medium">Final reminder sent</span>
                      <p className="text-sm text-gray-600">Final reminder with event details 3-5 days before</p>
                      <input type="date" placeholder="Date sent" className="mt-2 p-2 text-sm border border-gray-300 rounded" />
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                    <div>
                      <span className="text-gray-900 font-medium">Final headcount provided to venue</span>
                      <p className="text-sm text-gray-600">Confirm attendance numbers with venue</p>
                      <input type="text" placeholder="Final count" className="mt-2 p-2 text-sm border border-gray-300 rounded w-32" />
                    </div>
                  </label>
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">RSVP Tracking Notes</label>
                <textarea rows="4" placeholder="Track confirmations, declines, dietary restrictions, special requests..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
              </div>
            </div>
          )}

          {activeSection === 'partners' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Partner Integration</h2>
              
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 mb-6">
                <p className="text-sm font-semibold text-indigo-900">Primary Goal: Coordinate with collaborative partners and align on roles</p>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Partner Organization Name</label>
                <input type="text" placeholder="Enter partner organization name..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Partner Contact Person</label>
                <input type="text" placeholder="Name, title, email, phone..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Partner's Role in Event</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-gray-700">Co-hosting</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-gray-700">Branding/signage</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-gray-700">Speaking/presenting</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-gray-700">Payment processing</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-gray-700">Guest list contribution</span>
                  </label>
                </div>
                <textarea rows="2" placeholder="Other roles or responsibilities..." className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-gray-900 mb-3">Partner Coordination Checklist</h3>
                
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                    <div>
                      <span className="text-gray-900 font-medium">Partnership agreement confirmed</span>
                      <p className="text-sm text-gray-600">Align on expectations, deliverables, and responsibilities</p>
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                    <div>
                      <span className="text-gray-900 font-medium">Payment processing approved</span>
                      <p className="text-sm text-gray-600">If partner is processing payment, confirm venue approval and setup</p>
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                    <div>
                      <span className="text-gray-900 font-medium">Branding materials received</span>
                      <p className="text-sm text-gray-600">Logos, signage files, brand guidelines if applicable</p>
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                    <div>
                      <span className="text-gray-900 font-medium">Partner guest list received</span>
                      <p className="text-sm text-gray-600">If partner is contributing guests, receive list and integrate</p>
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                    <div>
                      <span className="text-gray-900 font-medium">Day-of roles finalized</span>
                      <p className="text-sm text-gray-600">Confirm who's doing what during the event (introductions, closing, etc.)</p>
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                    <div>
                      <span className="text-gray-900 font-medium">Post-event follow-up aligned</span>
                      <p className="text-sm text-gray-600">Coordinate on thank you messages, lead sharing, next steps</p>
                    </div>
                  </label>
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Partnership Notes</label>
                <textarea rows="4" placeholder="Additional partnership details, agreements, or considerations..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
              </div>
            </div>
          )}

          {activeSection === 'timeline' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Timeline & Milestones</h2>
              
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 mb-6">
                <p className="text-sm font-semibold text-indigo-900">Use this timeline as a guide and adjust dates based on your specific event schedule</p>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-600 pl-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">6-8 Weeks Before Event</h3>
                  <div className="space-y-2">
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Contact venue for availability</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Begin drafting A-list and B-list guest lists</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Identify and reach out to potential partners</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Secure internal budget approval</span>
                    </label>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">4-6 Weeks Before Event</h3>
                  <div className="space-y-2">
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Finalize venue date and sign contract</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Confirm pricing and payment method</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Finalize partner agreements</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Send save-the-date to A-list</span>
                    </label>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">3-4 Weeks Before Event</h3>
                  <div className="space-y-2">
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Send formal invitations to A-list with RSVP link</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Confirm A/V and technical requirements with venue</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Finalize food and beverage menu</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Create event materials/deliverables (if applicable)</span>
                    </label>
                  </div>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">2 Weeks Before Event</h3>
                  <div className="space-y-2">
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Send invitations to B-list (based on A-list response)</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Send first reminder to non-responders</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Print name tags, signage, materials</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Confirm internal team attendance and roles</span>
                    </label>
                  </div>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">1 Week Before Event</h3>
                  <div className="space-y-2">
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Reconfirm all details with venue</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Provide preliminary headcount to venue</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Finalize day-of schedule and run-of-show</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Brief internal team and partners on roles</span>
                    </label>
                  </div>
                </div>
                
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">3-5 Days Before Event</h3>
                  <div className="space-y-2">
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Send final reminder with event details</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Provide final headcount to venue</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Prepare attendee list and name tags</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Test A/V equipment if possible</span>
                    </label>
                  </div>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Day of Event</h3>
                  <div className="space-y-2">
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Arrive early for setup and final checks</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Verify room setup, signage, and materials</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Test A/V equipment</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Greet guests and facilitate networking</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Take photos/capture content</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Collect business cards or contact info</span>
                    </label>
                  </div>
                </div>
                
                <div className="border-l-4 border-gray-500 pl-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Post-Event (1-2 Days After)</h3>
                  <div className="space-y-2">
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Send thank you emails to attendees</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Share photos and recap</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Send feedback survey</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Process payment and reconcile expenses</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Conduct internal team debrief</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                      <span className="text-gray-700">Document lessons learned and update template</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 mt-8">
                <label className="block text-sm font-semibold text-gray-700">Custom Timeline Notes</label>
                <textarea rows="4" placeholder="Add any custom timeline adjustments or notes specific to this event..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
              </div>
            </div>
          )}

          {activeSection === 'success' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Success Metrics & Deliverables</h2>
              
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 mb-6">
                <p className="text-sm font-semibold text-indigo-900">Define what success looks like and how you'll measure it</p>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Primary Event Goals</label>
                <textarea rows="4" placeholder="What are the main objectives? (e.g., generate 10 qualified leads, strengthen 5 key relationships, introduce new product, etc.)" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700">Target Attendance</label>
                  <input type="text" placeholder="e.g., 20-25 people" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                </div>
                
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700">Actual Attendance</label>
                  <input type="text" placeholder="Fill in after event" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Key Performance Indicators (KPIs)</label>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-gray-700">Number of new contacts made</span>
                    <input type="text" placeholder="Target" className="ml-auto w-24 p-2 border border-gray-300 rounded text-sm" />
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-gray-700">Number of qualified leads generated</span>
                    <input type="text" placeholder="Target" className="ml-auto w-24 p-2 border border-gray-300 rounded text-sm" />
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-gray-700">Follow-up meetings scheduled</span>
                    <input type="text" placeholder="Target" className="ml-auto w-24 p-2 border border-gray-300 rounded text-sm" />
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-gray-700">Social media engagement (posts, shares, likes)</span>
                    <input type="text" placeholder="Target" className="ml-auto w-24 p-2 border border-gray-300 rounded text-sm" />
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-gray-700">Partnership opportunities identified</span>
                    <input type="text" placeholder="Target" className="ml-auto w-24 p-2 border border-gray-300 rounded text-sm" />
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-gray-700">Attendee satisfaction score</span>
                    <input type="text" placeholder="Target" className="ml-auto w-24 p-2 border border-gray-300 rounded text-sm" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Custom KPIs</label>
                <textarea rows="3" placeholder="List any additional metrics specific to this event..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Event Deliverables</label>
                <div className="space-y-2">
                  <label className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-gray-700">Printed materials (brochures, one-pagers, etc.)</span>
                  </label>
                  <label className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-gray-700">Digital presentation or slides</span>
                  </label>
                  <label className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-gray-700">Product demos or samples</span>
                  </label>
                  <label className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-gray-700">Branded swag or giveaways</span>
                  </label>
                  <label className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-gray-700">Event signage and name tags</span>
                  </label>
                </div>
                <textarea rows="2" placeholder="Other deliverables needed..." className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Budget & ROI Tracking</label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Total Event Budget</label>
                    <input type="text" placeholder="$0.00" className="w-full p-2 border border-gray-300 rounded" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Actual Spend</label>
                    <input type="text" placeholder="$0.00" className="w-full p-2 border border-gray-300 rounded" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Cost Per Attendee</label>
                    <input type="text" placeholder="$0.00" className="w-full p-2 border border-gray-300 rounded" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Estimated ROI</label>
                    <input type="text" placeholder="e.g., 3x" className="w-full p-2 border border-gray-300 rounded" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'feedback' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Post-Event Feedback & Lessons Learned</h2>
              
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 mb-6">
                <p className="text-sm font-semibold text-indigo-900">Complete this section after the event to capture insights and improve future events</p>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Event Date</label>
                <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">What Went Well? ✅</label>
                <textarea rows="5" placeholder="List the successes, highlights, and positive feedback from the event..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">What Could Be Improved? 📈</label>
                <textarea rows="5" placeholder="List challenges, issues, or areas for improvement..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Attendee Feedback Summary</label>
                <textarea rows="5" placeholder="Summarize key themes from attendee feedback surveys, conversations, or comments..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Key Lessons Learned</label>
                <textarea rows="5" placeholder="What are the top 3-5 lessons from this event that should inform future planning?" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Action Items for Next Event</label>
                <textarea rows="5" placeholder="What specific changes or actions should be taken for the next event based on this experience?" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700">Venue Rating (1-5)</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button key={num} className="w-12 h-12 border border-gray-300 rounded hover:bg-indigo-100 hover:border-indigo-500 transition-colors">
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700">Overall Event Rating (1-5)</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button key={num} className="w-12 h-12 border border-gray-300 rounded hover:bg-indigo-100 hover:border-indigo-500 transition-colors">
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Would You Use This Venue Again?</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="venue-again" className="w-4 h-4 text-indigo-600" />
                    <span className="text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="venue-again" className="w-4 h-4 text-indigo-600" />
                    <span className="text-gray-700">No</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="venue-again" className="w-4 h-4 text-indigo-600" />
                    <span className="text-gray-700">Maybe</span>
                  </label>
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Follow-Up Status</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-gray-700">Thank you emails sent</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-gray-700">Feedback survey distributed</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-gray-700">Photos/recap shared</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-gray-700">Leads entered into CRM</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-gray-700">Follow-up meetings scheduled</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-gray-700">Internal team debrief completed</span>
                  </label>
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Additional Notes</label>
                <textarea rows="4" placeholder="Any other observations, ideas, or documentation for this event..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6 text-center">
          <p className="text-sm text-gray-600">
            💡 <strong>Pro Tip:</strong> Save a copy of this completed template for each event to build a knowledge base for future planning
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventPlanningTemplate;