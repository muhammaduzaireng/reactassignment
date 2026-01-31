import React, { useRef, useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const labelHoverPlugin = {
  id: 'labelHover',
  afterDraw: (chart) => {
    const ctx = chart.ctx;
    const xAxis = chart.scales.x;
    const hoveredIndex = chart.hoveredLabelIndex;
    
    if (hoveredIndex !== null && hoveredIndex !== undefined && xAxis) {
      try {
        const tickOpts = xAxis.options.ticks;
        const tickFont = typeof tickOpts.font === 'object' ? tickOpts.font : { size: 12 };
        const tickPadding = tickOpts.padding || 4;
        
        // Get backgroundColor from ticks options
        const getBackgroundColor = typeof tickOpts.backgroundColor === 'function' 
          ? tickOpts.backgroundColor({ chart, index: hoveredIndex }) 
          : (tickOpts.backgroundColor || '#E8EDFF');
        
        // Calculate label position
        const scale = xAxis;
        const pixelForValue = scale.getPixelForValue(hoveredIndex);
        const labelText = scale.ticks[hoveredIndex]?.label || '';
        
        if (labelText) {
          ctx.save();
          ctx.font = `${tickFont.size || 12}px ${tickFont.family || 'Poppins'}`;
          const textMetrics = ctx.measureText(labelText);
          const textWidth = textMetrics.width;
          const textHeight = tickFont.size || 12;
          
          // Position for label (centered at tick position, at bottom of chart)
          const labelX = pixelForValue;
          const labelY = scale.bottom - tickPadding;
          const padding = 12; // Increased padding
          const borderRadius = 12; // rounded-xl equivalent
          
          // Calculate rectangle dimensions
          const rectX = labelX - textWidth / 2 - padding;
          const rectY = labelY - textHeight - padding / 2;
          const rectWidth = textWidth + padding * 2;
          const rectHeight = textHeight + padding;
          
          // Helper function to draw rounded rectangle
          const drawRoundedRect = (x, y, width, height, radius) => {
            ctx.beginPath();
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width - radius, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
            ctx.lineTo(x + width, y + height - radius);
            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
            ctx.lineTo(x + radius, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);
            ctx.closePath();
          };
          
          // Draw background color with rounded corners
          if (getBackgroundColor && getBackgroundColor !== 'transparent') {
            ctx.fillStyle = getBackgroundColor;
            drawRoundedRect(rectX, rectY, rectWidth, rectHeight, borderRadius);
            ctx.fill();
          }
          
          // Redraw the text on top of the background
          const textColor = typeof tickOpts.color === 'function'
            ? tickOpts.color({ chart, index: hoveredIndex })
            : (tickOpts.color || '#0A2AE7');
          ctx.fillStyle = textColor;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';
          ctx.fillText(labelText, labelX, labelY);
          
          ctx.restore();
        }
      } catch (e) {
        // Silently fail if there's an issue accessing chart properties
      }
    }
  }
};

ChartJS.register(labelHoverPlugin);

function NetYouTubeRevenueChart() {
  const chartRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update chart when isMobile changes
  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update();
    }
  }, [isMobile]);

  const chartData = [
    { value: 9551.00, label: 'Net YouTube Revenue (US$)', color: '#2563eb' },
    { value: 7599.00, label: 'Net UGC, Rights Management (US$)', color: '#7dd3fc' },
    { value: 6000.00, label: 'Branded Revenue (US$)', color: '#ef4444' },
    { value: 4040.00, label: 'Reserved Media Revenue (US$)', color: '#f97316' },
  ];

  const data = {
    labels: chartData.map((_, index) => index), // Use indices, labels are handled in ticks callback
    datasets: [
      {
        data: chartData.map(item => item.value),
        backgroundColor: chartData.map(item => item.color),
        borderRadius: 0,
        borderSkipped: false,
        maxBarThickness: 60,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: 'index'
    },
    onHover: (event, activeElements, chart) => {
      event.native.target.style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
      
      if (activeElements.length > 0) {
        const datasetIndex = activeElements[0].datasetIndex;
        const index = activeElements[0].index;
        if (chart.hoveredLabelIndex !== index) {
          chart.hoveredLabelIndex = index;
          chart.update('none');
        }
      } else {
        if (chart.hoveredLabelIndex !== null) {
          chart.hoveredLabelIndex = null;
          chart.update('none');
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        position: 'nearest',
        xAlign: 'center',
        yAlign: 'bottom',
        backgroundColor: '#616161E5',
        padding: 12,
        titleFont: {
          size: 12,
          weight: 'normal'
        },
        bodyFont: {
          size: 12
        },
        displayColors: false,
        callbacks: {
          title: function(context) {
            // Get label from chartData using index
            const index = context[0].dataIndex;
            return chartData[index]?.label || '';
          },
          label: function(context) {
            return '$' + context.parsed.y.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        categoryPercentage: 0.5,
        barPercentage: 0.6,
        ticks: {
          display: !isMobile, // Hide labels on mobile
          font: {
            size: 12
          },
          callback: function(value, index) {
            return chartData[index]?.label || '';
          }
        }
      },
      y: {
        position: 'right',
        beginAtZero: true,
        max: 12000,
        ticks: {
          stepSize: 3000,
          callback: function(value) {
            return value / 1000 + 'k';
          },
          font: {
            size: 12
          },
          color: '#6b7280'
        },
        grid: {
          color: '#e5e7eb',
          borderDash: [5, 5],
          drawBorder: false
        }
      }
    }
  };

  return (
    <div className=" h-[200px] p-4 flex flex-col">
      <div className="relative flex-1 min-h-0">
        <Bar ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
}

export default NetYouTubeRevenueChart;
