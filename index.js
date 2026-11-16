import { analyzeChanges } from '@amanlikestowrite/commit-mate';

const analysis = analyzeChanges({
  files: [{ path: 'src/greeting.js', code: 'A ', staged: true }],
  diff: [
    'diff --git a/src/greeting.js b/src/greeting.js',
    'new file mode 100644',
    '+export function greet(name) {',
  ].join('\n'),
  stats: [{ path: 'src/greeting.js', additions: 3, deletions: 0 }],
});

if (analysis.needsContext) {
  console.error(analysis.reason);
  process.exitCode = 1;
} else {
  console.log('Suggestions from @amanlikestowrite/commit-mate:\n');
  for (const [index, suggestion] of analysis.suggestions.entries()) {
    console.log(`${index + 1}. ${suggestion.message} (${suggestion.label})`);
  }
}
