import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import {
  ServiceOption,
  SelectedServices,
  CustomFeature,
  ClientInfo,
} from "../types";

// Define custom styles for a more professional look
const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 30,
    borderBottom: "2 solid #1d4ed8",
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    color: "#1d4ed8",
    marginBottom: 8,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
  },
  section: {
    marginBottom: 25,
  },
  sectionHeader: {
    backgroundColor: "#eff6ff",
    padding: 10,
    marginBottom: 15,
  },
  heading: {
    fontSize: 16,
    color: "#1d4ed8",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "8 0",
    borderBottom: "1 solid #e5e7eb",
  },
  label: {
    fontSize: 12,
    color: "#374151",
    flex: 1,
  },
  value: {
    fontSize: 12,
    color: "#374151",
    textAlign: "right",
  },
  clientInfo: {
    marginBottom: 8,
  },
  clientLabel: {
    fontSize: 12,
    color: "#6b7280",
  },
  clientValue: {
    fontSize: 12,
    color: "#374151",
    marginTop: 2,
  },
  total: {
    marginTop: 30,
    padding: "20 15",
    backgroundColor: "#1d4ed8",
    borderRadius: 5,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalLabel: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
  },
  totalAmount: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: "center",
    color: "#6b7280",
    fontSize: 10,
    borderTop: "1 solid #e5e7eb",
    paddingTop: 20,
  },
});

export const QuotePDF: React.FC<QuotePDFProps> = ({
  clientInfo,
  selectedServices,
  services,
  customFeatures,
}) => {
  const selectedServicesList = services.filter(
    (service) => selectedServices[service.id]
  );
  const servicesTotal = selectedServicesList.reduce(
    (sum, service) => sum + service.price,
    0
  );
  const customFeaturesTotal = customFeatures.reduce(
    (sum, feature) => sum + feature.price,
    0
  );
  const total = servicesTotal + customFeaturesTotal;
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Project Quote</Text>
          <Text style={styles.subtitle}>Generated on {date}</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.heading}>Client Information</Text>
          </View>
          <View style={styles.clientInfo}>
            <Text style={styles.clientLabel}>Name</Text>
            <Text style={styles.clientValue}>{clientInfo.name}</Text>
          </View>
          <View style={styles.clientInfo}>
            <Text style={styles.clientLabel}>Email</Text>
            <Text style={styles.clientValue}>{clientInfo.email}</Text>
          </View>
          <View style={styles.clientInfo}>
            <Text style={styles.clientLabel}>Company</Text>
            <Text style={styles.clientValue}>{clientInfo.company}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.heading}>Selected Services</Text>
          </View>
          {selectedServicesList.map((service) => (
            <View key={service.id} style={styles.row}>
              <Text style={styles.label}>{service.label}</Text>
              <Text style={styles.value}>
                ₹{service.price.toLocaleString()}
              </Text>
            </View>
          ))}
        </View>

        {customFeatures.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.heading}>Custom Features</Text>
            </View>
            {customFeatures.map((feature, index) => (
              <View key={index} style={styles.row}>
                <Text style={styles.label}>{feature.name}</Text>
                <Text style={styles.value}>
                  Rs. {feature.price.toLocaleString()}
                </Text>
              </View>
            ))}
          </View>
        )}

        <View style={styles.total}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Estimate</Text>
            <Text style={styles.totalAmount}>Rs. {total.toLocaleString()}</Text>
          </View>
        </View>

        <Text style={styles.footer}>
          This quote is valid for 30 days from the date of generation. All
          prices are in USD and subject to applicable taxes.
        </Text>
      </Page>
    </Document>
  );
};
