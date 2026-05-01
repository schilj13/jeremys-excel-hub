'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import HyperFormula from 'hyperformula'

const COLS = 8
const ROWS = 20
const COL_LABELS = Array.from({ length: COLS }, (_, i) => String.fromCharCode(65 + i))

const INITIAL_DATA = [
  ['Month',    'Sales', 'Expenses', 'Profit',       '', '', '', ''],
  ['January',   5200,    3100,      '=B2-C2',        '', '', '', ''],
  ['February',  4800,    2900,      '=B3-C3',        '', '', '', ''],
  ['March',     6100,    3400,      '=B4-C4',        '', '', '', ''],
  ['April',     5700,    3200,      '=B5-C5',        '', '', '', ''],
  ['May',       6800,    3600,      '=B6-C6',        '', '', '', ''],
  ['June',      7200,    3900,      '=B7-C7',        '', '', '', ''],
  ['TOTAL',    '=SUM(B2:B7)', '=SUM(C2:C7)', '=SUM(D2:D7)', '', '', '', ''],
  ['AVERAGE',  '=AVERAGE(B2:B7)', '=AVERAGE(C2:C7)', '=AVERAGE(D2:D7)', '', '', '', ''],
  ...Array.from({ length: ROWS - 9 }, () => ['', '', '', '', '', '', '', '']),
]

const EXAMPLES = [
  { formula: '=SUM(B2:B7)',                     desc: 'Add a range of numbers' },
  { formula: '=AVERAGE(B2:B7)',                  desc: 'Average of a range' },
  { formula: '=IF(B2>5000,"Great!","Below target")', desc: 'Conditional (IF)' },
  { formula: '=MAX(B2:B7)',                      desc: 'Highest value in range' },
  { formula: '=MIN(C2:C7)',                      desc: 'Lowest value in range' },
  { formula: '=COUNT(B2:B7)',                    desc: 'Count numeric cells' },
  { formula: '=ROUND(AVERAGE(B2:B7),0)',         desc: 'Nested functions' },
  { formula: '=CONCATENATE("Total: $",B8)',      desc: 'Combine text + number' },
]

type Addr = { row: number; col: number }

export default function PlaygroundPage() {
  const hfRef = useRef<HyperFormula | null>(null)
  const [, setTick] = useState(0)
  const [selected, setSelected] = useState<Addr>({ row: 0, col: 0 })
  const [barValue, setBarValue] = useState('')
  const barRef = useRef<HTMLInputElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    hfRef.current = HyperFormula.buildFromArray(
      INITIAL_DATA as (string | number)[][],
      { licenseKey: 'gpl-v3' }
    )
    setTick(t => t + 1)
    syncBar({ row: 0, col: 0 })
    return () => { hfRef.current?.destroy() }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const syncBar = useCallback((addr: Addr) => {
    const hf = hfRef.current
    if (!hf) return
    const formula = hf.getCellFormula({ sheet: 0, ...addr })
    const val = hf.getCellValue({ sheet: 0, ...addr })
    setBarValue(formula ?? (val != null ? String(val) : ''))
  }, [])

  const select = (addr: Addr) => {
    setSelected(addr)
    syncBar(addr)
  }

  const commit = useCallback((value: string, addr?: Addr) => {
    const hf = hfRef.current
    const target = addr ?? selected
    if (!hf) return
    hf.setCellContents({ sheet: 0, ...target }, [[value]])
    setTick(t => t + 1)
    syncBar(target)
  }, [selected, syncBar])

  const move = useCallback((dRow: number, dCol: number) => {
    setSelected(prev => {
      const next = {
        row: Math.max(0, Math.min(ROWS - 1, prev.row + dRow)),
        col: Math.max(0, Math.min(COLS - 1, prev.col + dCol)),
      }
      syncBar(next)
      return next
    })
  }, [syncBar])

  const getCellDisplay = (row: number, col: number): string => {
    const hf = hfRef.current
    if (!hf) return ''
    const val = hf.getCellValue({ sheet: 0, row, col })
    if (val === null || val === undefined) return ''
    if (typeof val === 'object') return val.toString()
    if (typeof val === 'number') return Number.isInteger(val) ? String(val) : val.toFixed(2)
    return String(val)
  }

  const cellLabel = `${COL_LABELS[selected.col]}${selected.row + 1}`

  return (
    <div className="p-3 sm:p-5 max-w-6xl mx-auto space-y-3 sm:space-y-4">

      {/* Header */}
      <div className="bg-[#e8f5ee] border border-[#217346] rounded p-4 sm:p-5">
        <p className="text-[10px] text-[#217346] font-mono mb-1 opacity-70">A1 — Playground</p>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Excel Formula Playground</h1>
        <p className="text-sm text-gray-600">
          Click any cell, type a value or formula in the bar below, and press{' '}
          <kbd className="bg-white border border-gray-200 rounded px-1.5 py-0.5 text-xs font-mono">Enter</kbd>.
          Formulas start with <code className="bg-white px-1 rounded text-[#0078d4] font-mono text-xs">=</code> — just like real Excel.
        </p>
      </div>

      {/* Formula Bar */}
      <div className="flex items-center border border-[#d1d1d1] rounded bg-white overflow-hidden shadow-sm">
        <div className="bg-[#f2f2f2] border-r border-[#d1d1d1] px-2 py-2 text-xs text-gray-700 font-mono w-14 text-center flex-shrink-0 select-none">
          {cellLabel}
        </div>
        <div className="w-px h-4 bg-[#d1d1d1] mx-1 flex-shrink-0" />
        <span className="text-[#217346] text-sm font-bold italic px-2 flex-shrink-0 select-none">fx</span>
        <input
          ref={barRef}
          type="text"
          value={barValue}
          onChange={e => setBarValue(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              commit(barValue)
              barRef.current?.blur()
              gridRef.current?.focus()
            }
            if (e.key === 'Escape') {
              syncBar(selected)
              barRef.current?.blur()
              gridRef.current?.focus()
            }
            if (e.key === 'Tab') {
              e.preventDefault()
              commit(barValue)
              move(0, 1)
              barRef.current?.blur()
            }
          }}
          className="flex-1 px-2 py-2 text-sm font-mono text-[#0078d4] outline-none min-w-0"
          placeholder="Select a cell and type a value or =formula..."
          spellCheck={false}
        />
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        tabIndex={0}
        className="border border-[#d1d1d1] rounded overflow-auto shadow-sm outline-none focus:ring-2 focus:ring-[#217346] focus:ring-offset-1"
        style={{ maxHeight: '420px' }}
        onKeyDown={e => {
          const arrowMoves: Record<string, [number, number]> = {
            ArrowUp: [-1, 0], ArrowDown: [1, 0],
            ArrowLeft: [0, -1], ArrowRight: [0, 1],
          }
          if (arrowMoves[e.key]) {
            e.preventDefault()
            const [dRow, dCol] = arrowMoves[e.key]
            move(dRow, dCol)
            return
          }
          if (e.key === 'Tab') {
            e.preventDefault()
            move(0, e.shiftKey ? -1 : 1)
            return
          }
          if (e.key === 'Delete' || e.key === 'Backspace') {
            commit('')
            return
          }
          if (e.key === 'Enter') {
            barRef.current?.focus()
            return
          }
          if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
            setBarValue(e.key)
            barRef.current?.focus()
          }
        }}
      >
        <table className="border-collapse text-xs w-full select-none" style={{ minWidth: `${COLS * 90 + 36}px` }}>
          <thead className="sticky top-0 z-20">
            <tr>
              <th className="w-9 bg-[#f2f2f2] border-r border-b border-[#d0d0d0]" />
              {COL_LABELS.map(col => (
                <th
                  key={col}
                  className="bg-[#f2f2f2] border-r border-b border-[#d0d0d0] text-center text-gray-500 font-medium py-0.5 min-w-[90px]"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: ROWS }, (_, row) => (
              <tr key={row}>
                <td className="sticky left-0 bg-[#f2f2f2] border-r border-b border-[#e0e0e0] text-center text-[10px] text-gray-400 w-9 z-10">
                  {row + 1}
                </td>
                {Array.from({ length: COLS }, (_, col) => {
                  const isSel = selected.row === row && selected.col === col
                  const display = getCellDisplay(row, col)
                  const isHeaderCell = (row === 0 || col === 0) && display !== ''
                  const isError = display.startsWith('#')
                  return (
                    <td
                      key={col}
                      onClick={() => { select({ row, col }); gridRef.current?.focus() }}
                      onDoubleClick={() => barRef.current?.focus()}
                      className={[
                        'border-r border-b px-2 h-6 align-middle font-mono whitespace-nowrap cursor-default transition-colors',
                        isSel
                          ? 'bg-[#c6efce] border-[#e8e8e8] outline outline-2 outline-[#217346] outline-offset-[-2px] relative z-10'
                          : isHeaderCell
                          ? 'bg-[#f9f9f9] border-[#e8e8e8] font-semibold text-gray-700 hover:bg-[#f0f0f0]'
                          : 'border-[#e8e8e8] text-gray-700 hover:bg-[#f5fbf7]',
                        isError ? 'text-red-500' : '',
                      ].join(' ')}
                    >
                      {display}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Keyboard hints */}
      <div className="flex flex-wrap gap-3 text-[11px] text-gray-400">
        {[
          ['Click', 'select cell'],
          ['Type', 'edit value'],
          ['Enter', 'confirm'],
          ['Arrow keys', 'navigate'],
          ['Delete', 'clear cell'],
          ['Double-click', 'focus formula bar'],
        ].map(([key, desc]) => (
          <span key={key}>
            <kbd className="bg-gray-100 border border-gray-200 rounded px-1 py-0.5 font-mono text-gray-600">{key}</kbd>
            {' '}{desc}
          </span>
        ))}
      </div>

      {/* Example Formulas */}
      <div className="border border-[#d1d1d1] rounded overflow-hidden">
        <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-3 py-1.5 text-[11px] font-semibold text-gray-500 tracking-wide">
          TRY THESE — select any empty cell, then click a formula to apply it
        </div>
        <div className="p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {EXAMPLES.map(ex => (
            <button
              key={ex.formula}
              onClick={() => {
                commit(ex.formula)
                gridRef.current?.focus()
              }}
              className="flex flex-col gap-0.5 text-left p-2 rounded border border-[#e8e8e8] hover:border-[#217346] hover:bg-[#f5fbf7] transition-colors group"
            >
              <code className="text-[#0078d4] text-[11px] font-mono group-hover:text-[#217346] truncate w-full">
                {ex.formula}
              </code>
              <span className="text-[10px] text-gray-500">{ex.desc}</span>
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}
