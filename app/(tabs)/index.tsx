import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { BreathingOrb } from '@/components/breathing-orb';
import { Colors, Fonts, Palette } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const quickActions = [
  { label: 'Log Mood', icon: 'heart' },
  { label: 'Log Symptom', icon: 'pulse' },
  { label: 'Log Med', icon: 'medkit' },
  { label: 'Care Moment', icon: 'cafe' },
];

const rhythmStory = [
  {
    title: 'What I experienced today',
    chips: ['Morning meds', 'Light dizziness', 'Nap 20m'],
    note: 'Energy dipped after morning meds.',
  },
  {
    title: 'How it felt',
    chips: ['Steady', 'Soft fatigue', 'Small win'],
    note: 'Breathe exercise lowered stress.',
  },
  {
    title: 'What helped',
    chips: ['Hydration', 'Grounding', 'Support text'],
    note: 'Coffee + water steadied nausea.',
  },
  {
    title: 'What changed from yesterday',
    chips: ['Better focus', 'Pain lighter', 'Sleep similar'],
    note: 'Overall trend: gentle upswing.',
  },
];

const caretakerFlags = ['Stable overall', 'Stress trending ↑', '1 follow-up flag'];

export default function TodayScreen() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <LinearGradient colors={[Palette.evergreen, Palette.deepTeal, Palette.charcoal]} style={styles.gradient}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.header}>
            <View>
              <Text style={styles.dayLabel}>Friday · 6:49 AM</Text>
              <Text style={styles.cycleLabel}>Cycle 1 of 3</Text>
            </View>
            <TouchableOpacity style={styles.muteButton}>
              <Ionicons name="volume-high" size={18} color={Palette.sandLight} />
            </TouchableOpacity>
          </View>

          <View style={styles.orbContainer}>
            <BreathingOrb />
            <Text style={styles.orbPrompt}>Breathe out...</Text>
            <Text style={styles.microNarrative}>Your day feels steady so far.</Text>
          </View>

          <View style={styles.reflectionCard}>
            <Text style={styles.cardLabel}>One sentence from today…</Text>
            <Text style={styles.placeholderText}>“Afternoon calm arrived after grounding and water.”</Text>
          </View>

          <View style={styles.quickActions}>
            {quickActions.map(action => (
              <TouchableOpacity key={action.label} style={styles.actionButton}>
                <Ionicons name={action.icon as any} size={18} color={Palette.sandLight} />
                <Text style={styles.actionLabel}>{action.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.storyGroup}>
            {rhythmStory.map(section => (
              <View key={section.title} style={styles.storyCard}>
                <Text style={styles.storyTitle}>{section.title}</Text>
                <View style={styles.chipRow}>
                  {section.chips.map(chip => (
                    <View key={chip} style={styles.chip}>
                      <Text style={styles.chipText}>{chip}</Text>
                    </View>
                  ))}
                </View>
                <Text style={styles.storyNote}>{section.note}</Text>
              </View>
            ))}
          </View>

          <View style={styles.feedbackCard}>
            <Text style={styles.feedbackTitle}>Caretaker insight</Text>
            <Text style={styles.feedbackCopy}>We’ll translate today’s rhythm into their daily summary.</Text>
            <View style={styles.flagRow}>
              {caretakerFlags.map(flag => (
                <View key={flag} style={styles.flagChip}>
                  <Text style={styles.flagText}>{flag}</Text>
                </View>
              ))}
            </View>
            <TouchableOpacity style={styles.ctaButton}>
              <Text style={styles.ctaLabel}>Preview what they see</Text>
              <Ionicons name="arrow-forward" size={16} color={theme.background} />
            </TouchableOpacity>
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
  dayLabel: {
    color: Palette.sandLight,
    fontFamily: Fonts.rounded,
    fontSize: 20,
  },
  cycleLabel: {
    color: Palette.mist,
    marginTop: 4,
  },
  muteButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orbContainer: {
    alignItems: 'center',
    gap: 12,
  },
  orbPrompt: {
    fontSize: 28,
    fontFamily: Fonts.rounded,
    color: Palette.sandLight,
  },
  microNarrative: {
    color: Palette.mist,
    fontSize: 16,
  },
  reflectionCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    gap: 10,
  },
  cardLabel: {
    color: Palette.mist,
    letterSpacing: 0.2,
  },
  placeholderText: {
    color: Palette.sandLight,
    fontSize: 18,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingVertical: 14,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  actionLabel: {
    color: Palette.sandLight,
    fontWeight: '600',
  },
  storyGroup: {
    gap: 14,
  },
  storyCard: {
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.04)',
    gap: 12,
  },
  storyTitle: {
    color: Palette.sandLight,
    fontSize: 18,
    fontFamily: Fonts.rounded,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  chipText: {
    color: Palette.sandLight,
    fontSize: 13,
  },
  storyNote: {
    color: Palette.mist,
  },
  feedbackCard: {
    backgroundColor: Palette.deepTeal,
    borderRadius: 26,
    padding: 24,
    gap: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  feedbackTitle: {
    color: Palette.sandLight,
    fontSize: 18,
    fontFamily: Fonts.rounded,
  },
  feedbackCopy: {
    color: Palette.mist,
  },
  flagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  flagChip: {
    backgroundColor: 'rgba(138, 208, 179, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(138, 208, 179, 0.3)',
  },
  flagText: {
    color: Palette.pistachio,
    fontSize: 13,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Palette.sandLight,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 18,
    marginTop: 4,
  },
  ctaLabel: {
    color: Palette.deepTeal,
    fontWeight: '600',
  },
});
