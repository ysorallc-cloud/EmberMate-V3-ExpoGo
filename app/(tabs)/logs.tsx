import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Fonts, Palette } from '@/constants/theme';

const logTabs = ['Mood', 'Symptoms', 'Medications', 'Hydration', 'Sleep', 'Notes', 'Care Moments'];

const logCards = [
  {
    title: 'Mood check-in',
    body: 'Drag the orb to today’s tone.',
    detail: 'Current: Settled · 2:15 PM',
    icon: 'happy',
    accent: Palette.pistachio,
  },
  {
    title: 'Symptom tiles',
    body: 'Select + describe in your own words.',
    detail: 'New: light dizziness, nausea easing',
    icon: 'pulse',
    accent: Palette.coral,
  },
  {
    title: 'Medication reactions',
    body: 'Swipe to confirm doses + add reactions.',
    detail: 'Med A taken · note small tremor',
    icon: 'medkit',
    accent: Palette.sandLight,
  },
  {
    title: 'Water + grounding',
    body: 'Tap “small comfort” chips to log care moments.',
    detail: 'Coffee, breathing, sunlight logged',
    icon: 'cafe',
    accent: Palette.mist,
  },
];

const reminders = [
  { label: 'Evening meds', time: '8:45 PM', tone: 'gentle' },
  { label: 'Stretch + breathe', time: '3:00 PM', tone: 'soft' },
  { label: 'Hydration nudge', time: 'Hourly · lighten if tired', tone: 'adaptive' },
];

export default function LogsScreen() {
  return (
    <LinearGradient colors={[Palette.deepTeal, Palette.charcoal]} style={styles.gradient}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Logs hub</Text>
              <Text style={styles.subtitle}>Everything you track lives here.</Text>
            </View>
            <TouchableOpacity style={styles.reminderBadge}>
              <Ionicons name="notifications-outline" size={18} color={Palette.sandLight} />
              <Text style={styles.badgeText}>3 reminders</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.segmentWrapper}>
            {logTabs.map((tab, index) => (
              <View key={tab} style={[styles.segment, index === 0 && styles.segmentActive]}>
                <Text style={[styles.segmentText, index === 0 && styles.segmentTextActive]}>{tab}</Text>
              </View>
            ))}
          </View>

          <View style={styles.cardList}>
            {logCards.map(card => (
              <View key={card.title} style={[styles.card, { borderColor: `${card.accent}33` }]}>
                <View style={[styles.iconPill, { backgroundColor: `${card.accent}25` }]}>
                  <Ionicons name={card.icon as any} size={20} color={card.accent} />
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{card.title}</Text>
                  <Text style={styles.cardBody}>{card.body}</Text>
                  <Text style={styles.cardDetail}>{card.detail}</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color={Palette.sandLight} />
              </View>
            ))}
          </View>

          <View style={styles.reminderCard}>
            <View style={styles.reminderHeader}>
              <Text style={styles.reminderTitle}>Reminders + overwhelm guard</Text>
              <TouchableOpacity>
                <Text style={styles.linkText}>Edit cadence</Text>
              </TouchableOpacity>
            </View>
            {reminders.map(reminder => (
              <View key={reminder.label} style={styles.reminderRow}>
                <View>
                  <Text style={styles.reminderLabel}>{reminder.label}</Text>
                  <Text style={styles.reminderTone}>{reminder.tone}</Text>
                </View>
                <Text style={styles.reminderTime}>{reminder.time}</Text>
              </View>
            ))}
            <View style={styles.toggleRow}>
              <View>
                <Text style={styles.toggleTitle}>Overwhelm mode</Text>
                <Text style={styles.toggleCopy}>We’ll quiet reminders when days feel heavy.</Text>
              </View>
              <View style={styles.toggle}>
                <View style={styles.toggleDot} />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safe: {
    flex: 1,
  },
  content: {
    padding: 24,
    paddingBottom: 40,
    gap: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: Palette.sandLight,
    fontSize: 26,
    fontFamily: Fonts.rounded,
  },
  subtitle: {
    color: Palette.mist,
    marginTop: 6,
  },
  reminderBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  badgeText: {
    color: Palette.sandLight,
    fontWeight: '600',
  },
  segmentWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  segment: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  segmentActive: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: 'rgba(255,255,255,0.25)',
  },
  segmentText: {
    color: Palette.mist,
    fontSize: 13,
  },
  segmentTextActive: {
    color: Palette.sandLight,
    fontWeight: '600',
  },
  cardList: {
    gap: 12,
  },
  card: {
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  iconPill: {
    width: 44,
    height: 44,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContent: {
    flex: 1,
    gap: 4,
  },
  cardTitle: {
    color: Palette.sandLight,
    fontSize: 17,
    fontFamily: Fonts.rounded,
  },
  cardBody: {
    color: Palette.mist,
  },
  cardDetail: {
    color: Palette.sandLight,
    fontSize: 12,
    opacity: 0.8,
  },
  reminderCard: {
    backgroundColor: 'rgba(0,0,0,0.35)',
    borderRadius: 24,
    padding: 20,
    gap: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  reminderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reminderTitle: {
    color: Palette.sandLight,
    fontSize: 18,
    fontFamily: Fonts.rounded,
  },
  linkText: {
    color: Palette.sandLight,
    fontWeight: '600',
  },
  reminderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  reminderLabel: {
    color: Palette.sandLight,
    fontWeight: '600',
  },
  reminderTone: {
    color: Palette.mist,
    fontSize: 13,
  },
  reminderTime: {
    color: Palette.sandLight,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  toggleTitle: {
    color: Palette.sandLight,
    fontFamily: Fonts.rounded,
  },
  toggleCopy: {
    color: Palette.mist,
  },
  toggle: {
    width: 52,
    height: 30,
    borderRadius: 999,
    backgroundColor: 'rgba(138, 208, 179, 0.3)',
    padding: 4,
    justifyContent: 'center',
  },
  toggleDot: {
    width: 22,
    height: 22,
    borderRadius: 999,
    backgroundColor: Palette.pistachio,
    alignSelf: 'flex-end',
  },
});
