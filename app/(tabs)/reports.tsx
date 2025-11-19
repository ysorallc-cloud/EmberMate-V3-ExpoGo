import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Fonts, Palette } from '@/constants/theme';

const summaryHighlights = [
  'Today was heavier than usual.',
  'Energy dipped after morning meds.',
  'Hydration + grounding improved mood.',
];

const warningFlags = [
  { label: 'Fatigue + low appetite · 3 days', action: 'Consider check-in.' },
  { label: 'Medication skipped twice', action: 'Ask if timing needs support.' },
  { label: 'Stress trending up', action: 'Encourage rest + gentle plans.' },
];

const correlations = [
  { title: 'Med A ↔ Headache', detail: 'Headaches 2h after Med A on 4/5 days.', trend: 'Alert' },
  { title: 'Hydration ↔ Mood', detail: 'Mood improves 30% on high-hydration days.', trend: 'Positive' },
];

const careTemplates = [
  {
    title: 'Doctor update',
    copy: '“Noticing dizziness + fatigue after Med A. Hydration helps, considering timing tweak.”',
  },
  {
    title: 'Family share',
    copy: '“Today felt heavier. Grounding + coffee helped. Might need quieter evening.”',
  },
];

const rhythmReport = [
  { label: 'What got better', value: 'Consistency with meds', color: Palette.pistachio },
  { label: 'Stayed the same', value: 'Sleep variability', color: Palette.sandLight },
  { label: 'What slipped', value: 'Afternoon energy', color: Palette.coral },
  { label: 'Worth celebrating', value: '3 care moments logged', color: Palette.mist },
];

export default function ReportsScreen() {
  return (
    <LinearGradient colors={[Palette.charcoal, Palette.deepTeal]} style={styles.gradient}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Reports</Text>
              <Text style={styles.subtitle}>Caretaker Intel · Emotional clarity</Text>
            </View>
            <Ionicons name="share-outline" size={22} color={Palette.sandLight} />
          </View>

          <View style={styles.reportCard}>
            <Text style={styles.sectionLabel}>Daily summary</Text>
            <Text style={styles.headline}>“Today was heavier than usual.”</Text>
            {summaryHighlights.map(highlight => (
              <View key={highlight} style={styles.listRow}>
                <View style={styles.bullet} />
                <Text style={styles.listText}>{highlight}</Text>
              </View>
            ))}
            <View style={styles.tagRow}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Care opportunity · Ask about dizziness</Text>
              </View>
              <View style={[styles.tag, { backgroundColor: 'rgba(138,208,179,0.12)' }]}>
                <Text style={[styles.tagText, { color: Palette.pistachio }]}>Celebrate hydration streak</Text>
              </View>
            </View>
          </View>

          <View style={styles.warningCard}>
            <Text style={styles.sectionLabel}>Early warning indicators</Text>
            {warningFlags.map(flag => (
              <View key={flag.label} style={styles.warningRow}>
                <View>
                  <Text style={styles.warningLabel}>{flag.label}</Text>
                  <Text style={styles.warningAction}>{flag.action}</Text>
                </View>
                <Ionicons name="alert-circle" size={20} color={Palette.coral} />
              </View>
            ))}
          </View>

          <View style={styles.graphCard}>
            <Text style={styles.sectionLabel}>Medication & symptom correlations</Text>
            {correlations.map(item => (
              <View key={item.title} style={styles.correlationRow}>
                <View style={styles.graphStub}>
                  <View style={[styles.graphFill, item.trend === 'Alert' ? styles.graphAlert : styles.graphPositive]} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.correlationTitle}>{item.title}</Text>
                  <Text style={styles.correlationDetail}>{item.detail}</Text>
                </View>
                <Text style={[styles.trendLabel, item.trend === 'Alert' ? styles.alertText : styles.positiveText]}>
                  {item.trend}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.templateCard}>
            <Text style={styles.sectionLabel}>Communication templates</Text>
            {careTemplates.map(template => (
              <View key={template.title} style={styles.templateRow}>
                <Text style={styles.templateTitle}>{template.title}</Text>
                <Text style={styles.templateCopy}>{template.copy}</Text>
              </View>
            ))}
          </View>

          <View style={styles.rhythmCard}>
            <Text style={styles.sectionLabel}>Weekly rhythm report</Text>
            <View style={styles.rhythmGrid}>
              {rhythmReport.map(item => (
                <View key={item.label} style={[styles.rhythmCell, { borderColor: `${item.color}40` }]}>
                  <Text style={styles.rhythmLabel}>{item.label}</Text>
                  <Text style={[styles.rhythmValue, { color: item.color }]}>{item.value}</Text>
                </View>
              ))}
            </View>
            <View style={styles.insightBox}>
              <Text style={styles.insightTitle}>Caregiver insight</Text>
              <Text style={styles.insightCopy}>
                Patient improving in consistency but still struggling with sleep variability. Consider quieter mornings.
              </Text>
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
    gap: 18,
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
  reportCard: {
    backgroundColor: 'rgba(0,0,0,0.35)',
    borderRadius: 24,
    padding: 20,
    gap: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  sectionLabel: {
    color: Palette.mist,
    fontSize: 13,
    letterSpacing: 0.6,
  },
  headline: {
    color: Palette.sandLight,
    fontSize: 20,
    fontFamily: Fonts.rounded,
  },
  listRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 999,
    backgroundColor: Palette.sandLight,
    marginTop: 6,
  },
  listText: {
    color: Palette.sandLight,
    flex: 1,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  tag: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(232,146,116,0.15)',
  },
  tagText: {
    color: Palette.coral,
    fontSize: 13,
  },
  warningCard: {
    backgroundColor: 'rgba(232,146,116,0.12)',
    borderRadius: 20,
    padding: 18,
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(232,146,116,0.4)',
  },
  warningRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  warningLabel: {
    color: Palette.sandLight,
    fontWeight: '600',
  },
  warningAction: {
    color: Palette.mist,
  },
  graphCard: {
    backgroundColor: 'rgba(0,0,0,0.35)',
    borderRadius: 24,
    padding: 20,
    gap: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  correlationRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  graphStub: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.05)',
    justifyContent: 'flex-end',
    padding: 6,
  },
  graphFill: {
    width: '100%',
    borderRadius: 6,
    height: '60%',
  },
  graphAlert: {
    backgroundColor: Palette.coral,
  },
  graphPositive: {
    backgroundColor: Palette.pistachio,
  },
  correlationTitle: {
    color: Palette.sandLight,
    fontFamily: Fonts.rounded,
  },
  correlationDetail: {
    color: Palette.mist,
  },
  trendLabel: {
    fontWeight: '600',
  },
  alertText: {
    color: Palette.coral,
  },
  positiveText: {
    color: Palette.pistachio,
  },
  templateCard: {
    backgroundColor: 'rgba(0,0,0,0.35)',
    borderRadius: 24,
    padding: 20,
    gap: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  templateRow: {
    gap: 6,
  },
  templateTitle: {
    color: Palette.sandLight,
    fontFamily: Fonts.rounded,
  },
  templateCopy: {
    color: Palette.mist,
  },
  rhythmCard: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 28,
    padding: 22,
    gap: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  rhythmGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  rhythmCell: {
    width: '47%',
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    gap: 6,
  },
  rhythmLabel: {
    color: Palette.mist,
    fontSize: 13,
  },
  rhythmValue: {
    fontFamily: Fonts.rounded,
    fontSize: 16,
  },
  insightBox: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 20,
    padding: 16,
    gap: 6,
  },
  insightTitle: {
    color: Palette.sandLight,
    fontFamily: Fonts.rounded,
  },
  insightCopy: {
    color: Palette.mist,
  },
});
